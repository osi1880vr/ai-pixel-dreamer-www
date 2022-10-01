

import os
import torch
from numpy import uint8
from PIL import Image
from tqdm import tqdm, trange
from einops import rearrange
from torchvision.utils import make_grid
import time
from pytorch_lightning import seed_everything


# removes init model warning with weights
from transformers import logging
logging.set_verbosity_error()

from sd.singleton import singleton
g_store = singleton

import sd.utils as utils
import sd.toxicode_utils as toxicode_utils

from sd.ddim_simplified import DDIMSampler

from ldm.models.diffusion.plms import PLMSSampler

from sd.modelloader import load_models

model  = None
device = None
config = None

plms_sampler = None
ddim_sampler = None

inpainting_config  = None
inpainting_model   = None
inpainting_sampler = None



tmp_directory    = "./outputs/inpaint"

device = torch.device("cuda")



def inpaint_init():
    global device
    global config
    global model
    config = "../models/v1-inference.yaml"


def choose_sampler(opt):
    if opt.plms:
        if opt.image_guide:
            raise NotImplementedError("PLMS sampler not (yet) supported")  # FIXME check ?
        return plms_sampler
    else:
        return ddim_sampler


def outpaint_txt2img(opt):

    from types import SimpleNamespace
    opt = SimpleNamespace(**opt)

    load_models()
    global plms_sampler
    global ddim_sampler
    plms_sampler = PLMSSampler(g_store.models["model"])
    ddim_sampler = DDIMSampler(g_store.models["model"])

    print(f"txt2img seed: {opt.seed}   steps: {opt.steps}  prompt: {opt.prompt}")
    print(f"size:  {opt.W}x{opt.H}")

    torch.cuda.empty_cache()
    torch.cuda.ipc_collect()

    # seeds = torch.randint(-2 ** 63, 2 ** 63 - 1, [accelerator.num_processes])
    # torch.manual_seed(seeds[accelerator.process_index].item())

    sampler = choose_sampler(opt)

    # model_wrap = K.external.CompVisDenoiser(model)
    # sigma_min, sigma_max = model_wrap.sigmas[0].item(), model_wrap.sigmas[-1].item()


    os.makedirs(opt.outdir, exist_ok=True)
    outpath = opt.outdir

    sample_path = os.path.join(outpath, "samples")
    os.makedirs(sample_path, exist_ok=True)

    base_count = len(os.listdir(sample_path))

    batch_size = opt.n_samples
    n_rows     = opt.n_rows if opt.n_rows > 0 else batch_size

    prompts_data = utils.get_prompts_data(opt)

    grid_path = ''


    image_guide  = None
    latent_guide = None

    t_start = None
    masked_image_for_blend  = None
    mask_for_reconstruction = None
    latent_mask_for_blend   = None

    # this explains the [1, 4, 64, 64]
    shape = (batch_size, opt.C, opt.H//opt.f, opt.W//opt.f)

    sampler.make_schedule(ddim_num_steps=opt.steps, ddim_eta=opt.ddim_eta, verbose=False)

    if opt.image_guide:
        image_guide = utils.image_path_to_torch(opt.image_guide, device)  # [1, 3, 512, 512]
        latent_guide = utils.torch_image_to_latent(g_store.models["model"], image_guide, n_samples=opt.n_samples)  # [1, 4, 64, 64]
        print(f'image_guide')

    if opt.blend_mask:
        [mask_for_reconstruction, latent_mask_for_blend] = toxicode_utils.get_mask_for_latent_blending(
            device, opt.blend_mask, blur=opt.mask_blur)  # [512, 512]  [1, 4, 64, 64]
        masked_image_for_blend = (1 - mask_for_reconstruction) * image_guide[0]  # [3, 512, 512]
        #masked_image_for_blend = mask_for_reconstruction * image_guide[0]  # [3, 512, 512]
        print(f'blend mask')

    elif image_guide is not None:
        assert 0. <= opt.strength <= 1., 'can only work with strength in [0.0, 1.0]'
        t_start = int(opt.strength * opt.steps)

        print(f"target t_start is {t_start} steps")

    multiple_mode = (opt.n_iter * len(prompts_data) * opt.n_samples > 1)

    with torch.no_grad(), g_store.models["model"].ema_scope(), torch.cuda.amp.autocast():
        tic = time.time()
        all_samples = list()
        counter = 0
        for n in trange(opt.n_iter, desc="Sampling"):
            for prompts in tqdm(prompts_data, desc="data"):

                seed = opt.seed + counter
                seed_everything(seed)

                unconditional_conditioning, conditioning = utils.get_conditionings(g_store.models["model"], prompts, opt)

                samples = sampler.ddim_sampling(
                    conditioning,               # [1, 77, 768]
                    shape,  # (1, 4, 64, 64)
                    x0=latent_guide,            # [1, 4, 64, 64]
                    mask=latent_mask_for_blend,  # [1, 4, 64, 64]
                    # 12 (if 20 steps and strength 0.75 => 15)
                    t_start=t_start,
                    unconditional_guidance_scale=opt.scale,
                    # [1, 77, 768]
                    unconditional_conditioning=unconditional_conditioning,
                )  # [1, 4, 64, 64]

                x_samples = utils.encoded_to_torch_image(
                    g_store.models["model"], samples)  # [1, 3, 512, 512]

                if masked_image_for_blend is not None:
                    x_samples = mask_for_reconstruction * x_samples + masked_image_for_blend

                all_samples.append(x_samples)

                if (not opt.skip_save) and (not multiple_mode):
                    for x_sample in x_samples:
                        image = utils.sampleToImage(x_sample)

                        image.save(
                            os.path.join(sample_path, f"{base_count:05}.png"),
                            pnginfo=toxicode_utils.metadata(
                                opt,
                                prompt=prompts[0],  # FIXME [0]
                                seed=seed,
                                generation_time=generated_time - tic
                            ))

                        base_count += 1


        if not opt.skip_grid:

            generated_time = time.time()

            if multiple_mode:
                # additionally, save as grid
                grid = torch.stack(all_samples, 0)
                grid = rearrange(grid, 'n b c h w -> (n b) c h w')
                grid = make_grid(grid, nrow=n_rows)

                # to image
                #grid = 255. * rearrange(grid, 'c h w -> h w c').cpu().numpy()
                #image = Image.fromarray(grid.astype(np.uint8))
            else:
                grid = all_samples[0][0]

            image = utils.sampleToImage(grid)
            grid_path = os.path.join(outpath, f'{opt.file_prefix}-0000.png')

            print(image)

            image.save(grid_path, pnginfo=toxicode_utils.metadata(
                opt,
                prompt = prompts[0],  # FIXME [0]
                seed   = opt.seed,
                generation_time = generated_time - tic
            ))

        toc = time.time()

        counter += 1

    #FIXME at the end ? at the beginning ?
    torch.cuda.empty_cache()
    torch.cuda.ipc_collect()

    print(f"Sampling took {toc-tic:g}s, i.e. produced {opt.n_iter * opt.n_samples / (toc - tic):.2f} samples/sec.")

    return [image, grid_path]

from sd.modelloader import load_models
from sd.kdiffusion_sampler import KDiffusionSampler
from sd.callbacks import generation_callback
from sd.image_processor import process_images, seed_to_int

from ldm.models.diffusion.ddim import DDIMSampler
from ldm.models.diffusion.plms import PLMSSampler

import os
import platform
import random
import sys
from typing import Union

from sd.singleton import singleton

gs = singleton


if "Linux" in platform.platform():
    sys.path.extend([
        '/content/src/taming-transformers',
        '/content/src/clip',
        '/content/deforum-sd-ui-colab',
        '/content/src/k-diffusion',
        '/content/src/pytorch3d-lite',
        '/content/src/AdaBins',
        '/content/src/MiDaS',
        '/content/src/soup',
        '/content/src/Real-ESRGAN'
    ])


def txt2img(prompt: str,
            ddim_steps: int,
            sampler_name: str,
            realesrgan_model_name: str,
            n_iter: int,
            batch_size: int,
            cfg_scale: float,
            seed: Union[int, str, None],
            height: int,
            width: int,
            separate_prompts: bool = False,
            normalize_prompt_weights: bool = True,
            save_individual_images: bool = True,
            save_grid: bool = True,
            group_by_prompt: bool = True,
            save_as_jpg: bool = True,
            use_gfpgan: bool = True,
            use_realesrgan: bool = True,
            realesrgan_model: str = "RealESRGAN_x4plus_anime_6B",
            fp=None,
            variant_amount: float = None,
            variant_seed: int = None,
            ddim_eta: float = 0.0,
            write_info_files: bool = True):
    load_models()
    outpath = gs.defaults.general.outdir_txt2img or gs.defaults.general.outdir or "outputs/txt2img-samples"
    os.makedirs(outpath, exist_ok=True)
    seed = seed_to_int(seed)

    print('group by prompt')
    print(group_by_prompt)

    # prompt_matrix = 0 in toggles
    # normalize_prompt_weights = 1 in toggles
    # skip_save = 2 not in toggles
    # save_grid = 3 not in toggles
    # sort_samples = 4 in toggles
    # write_info_files = 5 in toggles
    # jpg_sample = 6 in toggles
    # use_gfpgan = 7 in toggles
    # use_realesrgan = 8 in toggles

    if sampler_name == 'plms':
        sampler = PLMSSampler(gs.models["model"])
    elif sampler_name == 'ddim':
        sampler = DDIMSampler(gs.models["model"])
    elif sampler_name == 'k_dpm_2_a':
        sampler = KDiffusionSampler(gs.models["model"], 'dpm_2_ancestral')
    elif sampler_name == 'k_dpm_2':
        sampler = KDiffusionSampler(gs.models["model"], 'dpm_2')
    elif sampler_name == 'k_euler_a':
        sampler = KDiffusionSampler(gs.models["model"], 'euler_ancestral')
    elif sampler_name == 'k_euler':
        sampler = KDiffusionSampler(gs.models["model"], 'euler')
    elif sampler_name == 'k_heun':
        sampler = KDiffusionSampler(gs.models["model"], 'heun')
    elif sampler_name == 'klms':
        sampler = KDiffusionSampler(gs.models["model"], 'lms')
    else:
        raise Exception("Unknown sampler: " + sampler_name)

    def init():
        pass

    def sample(init_data, x, conditioning, unconditional_conditioning, sampler_name):
        samples_ddim, _ = sampler.sample(S=ddim_steps,
                                         conditioning=conditioning,
                                         batch_size=int(x.shape[0]),
                                         shape=x[0].shape,
                                         verbose=False,
                                         unconditional_guidance_scale=cfg_scale,
                                         unconditional_conditioning=unconditional_conditioning,
                                         eta=ddim_eta,
                                         x_T=x,
                                         img_callback=generation_callback,
                                         log_every_t=int(gs.defaults.general.update_preview_frequency))

        return samples_ddim

    output_images = None
    info = None
    stats = None
    try:
        output_images, seed, info, stats = process_images(
            outpath=outpath,
            func_init=init,
            func_sample=sample,
            prompt=prompt,
            seed=seed,
            sampler_name=sampler_name,
            save_grid=save_grid,
            batch_size=batch_size,
            n_iter=n_iter,
            steps=ddim_steps,
            cfg_scale=cfg_scale,
            width=width,
            height=height,
            prompt_matrix=separate_prompts,
            use_gfpgan=use_gfpgan,
            use_realesrgan=use_realesrgan,
            realesrgan_model_name=realesrgan_model_name,
            fp=fp,
            ddim_eta=ddim_eta,
            normalize_prompt_weights=normalize_prompt_weights,
            save_individual_images=save_individual_images,
            sort_samples=group_by_prompt,
            write_info_files=write_info_files,
            jpg_sample=save_as_jpg,
            variant_amount=variant_amount,
            variant_seed=variant_seed,
        )
    except Exception as e:
        print(e)
    finally:

        del sampler

        return output_images, seed, info, stats

# other imports
import os
import sys
from typing import Union
from io import BytesIO
from ldm.models.diffusion.ddim import DDIMSampler
from ldm.models.diffusion.plms import PLMSSampler

# from sd.sd_utils import *
# Temp imports
from sd.callbacks import generation_callback
from sd.image_processor import seed_to_int, process_images
from sd.kdiffusion_sampler import KDiffusionSampler
from sd.modelloader import load_models
from sd.singleton import singleton

gs = singleton

# end of imports
# ---------------------------------------------------------------------------------------------------------------


try:
    # this silences the annoying "Some weights of the model checkpoint were not used when initializing..." message at start.
    from transformers import logging

    logging.set_verbosity_error()
except:
    pass

if os.path.exists(os.path.join(gs.defaults.general.gfpgan_dir, "experiments", "pretrained_models", "GFPGANv1.3.pth")):
    gfpgan_available = True
else:
    gfpgan_available = False

if os.path.exists(os.path.join(gs.defaults.general.realesrgan_dir, "experiments", "pretrained_models",
                               f"{gs.defaults.general.realesrgan_model}.pth")):
    realesrgan_available = True
else:
    realesrgan_available = False


def run_txt2img_json(json):
    output_images = None
    try:
        output_images, seeds, info, stats = txt2img(prompt=json.prompt,
                                                    height=json.H,
                                                    width=json.W,
                                                    cfg_scale=json.scale,
                                                    seed=json.seed,
                                                    n_iter=json.iterations,
                                                    batch_size=json.batch_size,
                                                    ddim_steps=json.steps,
                                                    sampler_name=json.sampler,
                                                    # sampler_mode todo why its missing here?
                                                    separate_prompts=json.separate_prompts,
                                                    realesrgan_model_name=json.realesrgan_model_name,
                                                    normalize_prompt_weights=json.normalize_prompt_weights,
                                                    save_individual_images=json.save_individual_images,
                                                    save_grid=False,
                                                    group_by_prompt=json.group_by_prompt,
                                                    save_as_jpg=json.save_as_jpg,
                                                    use_gfpgan=json.use_gfpgan,
                                                    use_realesrgan=json.use_realesrgan,
                                                    realesrgan_model=json.realesrgan_model,
                                                    fp=json.fp,
                                                    variant_amount=json.variant_amount,
                                                    variant_seed=json.variant_seed,
                                                    write_info_files=json.write_info_files)
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
    finally:
        gs.rendering = False
        #return output_images


def run_txt2img_json_single(json_data):
    output_images = None
    try:
        output_images, seeds, info, stats = txt2img(prompt=json_data.prompt,
                                                    ddim_steps=json_data.steps,
                                                    sampler_name=json_data.sampler,
                                                    realesrgan_model_name=json_data.realesrgan_model_name,
                                                    n_iter=json_data.iterations,
                                                    batch_size=json_data.batch_size,
                                                    cfg_scale=json_data.scale,
                                                    seed=json_data.seed,
                                                    height=json_data.H,
                                                    width=json_data.W,
                                                    separate_prompts=json_data.separate_prompts,
                                                    normalize_prompt_weights=json_data.normalize_prompt_weights,
                                                    save_individual_images=json_data.save_individual_images,
                                                    save_grid=False,
                                                    group_by_prompt=json_data.group_by_prompt,
                                                    save_as_jpg=json_data.save_as_jpg,
                                                    use_gfpgan=json_data.use_gfpgan,
                                                    use_realesrgan=json_data.use_realesrgan,
                                                    realesrgan_model=json_data.realesrgan_model,
                                                    fp=json_data['fp'],
                                                    variant_amount=json_data.variant_amount,
                                                    variant_seed=json_data.variant_seed,
                                                    write_info_files=json_data.write_info_files)
    except Exception as e:
        print(e)
    finally:
        return output_images[0]


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

    try:
        load_models()
        outpath = gs.defaults.general.outdir_txt2img or gs.defaults.general.outdir or "outputs/txt2img-samples"

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
        elif sampler_name == 'dpm2_ancestral':
            sampler = KDiffusionSampler(gs.models["model"], 'dpm_2_ancestral')
        elif sampler_name == 'dpm2':
            sampler = KDiffusionSampler(gs.models["model"], 'dpm_2')
        elif sampler_name == 'euler_ancestral':
            sampler = KDiffusionSampler(gs.models["model"], 'euler_ancestral')
        elif sampler_name == 'k_euler':
            sampler = KDiffusionSampler(gs.models["model"], 'euler')
        elif sampler_name == 'heun':
            sampler = KDiffusionSampler(gs.models["model"], 'heun')
        elif sampler_name == 'klms':
            sampler = KDiffusionSampler(gs.models["model"], 'lms')
        else:
            raise Exception("Unknown sampler: " + sampler_name)

    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(e, exc_type, fname, exc_tb.tb_lineno)

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
                                         log_every_t=int(gs.defaults.general.update_preview_frequency)
                                         )

        return samples_ddim

    output_images = None
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
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
    finally:

        del sampler

        return output_images, seed, info, stats

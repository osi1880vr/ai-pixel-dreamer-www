import json
import os
import sys

from fastapi import APIRouter, BackgroundTasks, File, UploadFile, Form
import asyncio
from pydantic import BaseModel
from typing import Union
from PIL.PngImagePlugin import PngInfo
import random
from sd.txt2img import run_txt2img_json
from www.apis.v1.http.response import respond_500
from sd.singleton import singleton

gs = singleton

router = APIRouter()


class Txt2Img(BaseModel):
    prompt: str
    W: int
    H: int
    scale: float
    seed: Union[int, None]
    iterations: int
    batch_size: int
    steps: int
    sampler: str
    # sampling_mode: str
    separate_prompts: bool
    normalize_prompt_weights: bool
    save_individual_images: bool
    save_grid: bool
    group_by_prompt: bool
    save_as_jpg: bool
    use_gfpgan: bool
    use_realesrgan: bool
    realesrgan_model: str
    realesrgan_model_name: str
    fp: Union[int, None]
    variant_amount: int
    variant_seed: Union[int, None]
    write_info_files: bool
    update_preview: bool
    update_preview_frequency: int
    # todo make use of them?
    """ 
    
    ddim_eta: int
    dynamic_threshold: Union[int, None]
    static_threshold: Union[int, None]
    beta_start: float
    beta_end: float
    save_samples: bool
    save_settings: bool
    display_samples: bool
    n_batch: int
    batch_name: str
    filename_format: str
    seed_behavior: str
    grid_rows: int
    outdir: Union[str, None]
    use_init: bool
    strength: int
    strength_0_no_init: bool
    init_image: Union[str, None]
    use_mask: bool
    use_alpha_as_mask: bool
    invert_mask: bool
    adjust_mask_image: int
    mask_brightness_adjust: int
    mask_contrast_adjust: int
    render_mode: str
    keyframes: Union[int, None]
    """


#    mask_file: Union[int, None]


def txt2img_json(t2i_json):
    run_txt2img_json(t2i_json)


@router.post('/api/v1/txttoimg/run', status_code=201)
async def post(t2i_json: Txt2Img, background_tasks: BackgroundTasks):
    try:
        gs.current_images = []
        gs.rendering = True
        background_tasks.add_task(txt2img_json, t2i_json=t2i_json)
        return
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = 'txt2img error' + str(e)
        respond_500(message)


@router.get('/api/v1/txttoimg/get_results')
async def get():
    try:
        res = {
            'rendering': gs.rendering,
            'current_images': gs.current_images[::-1]
        }
        return res
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = 'txt2vid Error: ' + str(e)
        respond_500(message)

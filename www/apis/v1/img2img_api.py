import json
import os
import sys

from fastapi import APIRouter, BackgroundTasks, File, UploadFile, Form
import asyncio
from pydantic import BaseModel
from typing import Union
from PIL.PngImagePlugin import PngInfo
import random
from sd.img2img import run_img2img_json
from www.apis.v1.http.response import respond_500
from sd.singleton import singleton

gs = singleton

router = APIRouter()


class Img2Img(BaseModel):
    prompt: str
    init_info: str
    init_info_mask: str
    mask_mode: int
    mask_blur_strength: int
    mask_restore: bool
    ddim_steps: int
    sampler_name: str
    n_iter: int
    cfg_scale: float
    denoising_strength: float
    seed: int
    noise_mode: int
    find_noise_steps: str
    height: int
    width: int
    resize_mode: int
    fp: str
    variant_amount: float
    variant_seed: int
    ddim_eta: float
    write_info_files: bool
    realesrgan_model: str
    separate_prompts: bool
    normalize_prompt_weights: bool
    save_individual_images: bool
    save_grid: bool
    group_by_prompt: bool
    save_as_jpg: bool
    use_gfpgan: bool
    use_realesrgan: bool
    loopback: bool
    random_seed_loopback: bool



@router.post('/api/v1/imgtoimg/run', status_code=201)
async def post(i2i_json: Img2Img):
    try:
        gs.current_images = []
        gs.rendering = True
        await run_img2img_json(i2i_json)
        return
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = 'img2img error' + str(e)
        respond_500(message)


@router.get('/api/v1/imgtoimg/get_results')
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


@router.post('/api/v1/imgtoimg/upload_src')
async def post_src(
        upload: Union[UploadFile, bytes] = File(default=None),

):
    try:
        print('ok')
        return res
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = 'txt2vid Error: ' + str(e)
        respond_500(message)

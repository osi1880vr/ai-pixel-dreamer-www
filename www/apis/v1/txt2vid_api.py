import os
import sys
from typing import Union
from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel
import sd.sd_video as sd_video
from www.apis.v1.http.response import respond_500
from sd.singleton import singleton

gs = singleton



router = APIRouter()


class Txt2Vid(BaseModel):
    W: int
    H: int
    scale: float
    seed: Union[int, None]
    n_samples: int
    scale: float
    ddim_eta: float
    save_samples: bool
    save_settings: bool
    display_samples: bool
    n_batch: int
    batch_name: str
    filename_format: str
    seed_behavior: str
    make_grid: bool
    grid_rows: int
    use_init: bool
    strength: int
    strength_0_no_init: bool
    init_image: str
    use_mask: bool
    use_alpha_as_mask: bool
    mask_file: str
    invert_mask: bool
    mask_brightness_adjust: int
    mask_contrast_adjust: int
    generation_mode: str
    batch_size: int
    keyframes: str
    prompt: str
    use_gfpgan: bool
    use_realesrgan: bool
    animation_mode: str
    max_frames: int
    border: str
    angle: str
    zoom: str
    translation_x: str
    translation_y: str
    translation_z: str
    rotation_3d_x: str
    rotation_3d_y: str
    rotation_3d_z: str
    noise_schedule: str
    flip_2d_perspective: bool
    perspective_flip_theta: str
    perspective_flip_phi: str
    perspective_flip_gamma: str
    perspective_flip_fv: str
    strength_schedule: str
    contrast_schedule: str
    color_coherence: str
    diffusion_cadence: str
    use_depth_warping: bool
    midas_weight: float
    near_plane: int
    far_plane: int
    fov: int
    padding_mode: str
    sampler: str
    sampling_mode: str
    save_depth_maps: bool
    video_init_path: str
    extract_nth_frame: int
    interpolate_key_frames: bool
    interpolate_x_frames: int
    resume_from_timestring: bool
    resume_timestring: str
    outdir: Union[str, None]
    steps: int


def run_batch(t2v_json):
    sd_video.run_batch(t2v_json)


@router.post('/api/v1/txttovid/run', status_code=201)
async def post(t2v_json: Txt2Vid, background_tasks: BackgroundTasks):
    try:
        gs.current_images = []
        gs.current_video = ''
        gs.rendering = True
        background_tasks.add_task(run_batch, t2v_json=t2v_json)
        return

    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = 'txt2vid Error: ' + str(e)
        respond_500(message)


@router.get('/api/v1/txttovid/get_results')
async def get():
    try:

        return gs.current_video_frames

    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = 'txt2vid Error: ' + str(e)
        respond_500(message)

@router.get('/api/v1/txttovid/get_video')
async def get_video():
    try:

        return gs.current_video

    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = 'txt2vid Error: ' + str(e)
        respond_500(message)

import os
import sys

from fastapi import APIRouter

import sd.sd_video as sd_video
from www.apis.v1.http.response import respond_500
from sd.singleton import singleton

gs = singleton



router = APIRouter()


@router.post('/api/v1/txttovid/run')
async def post(self):
    try:
        txt2vid_json = request.get_json()

        sd_video.run_batch(txt2vid_json)

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

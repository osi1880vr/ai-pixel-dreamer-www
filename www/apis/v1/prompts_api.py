import sys

from fastapi import APIRouter
from pydantic import BaseModel

from sd.outpaint import *  # outpaint_txt2img
from sd.prompt_gen import generate_prompt
from sd.singleton import singleton
from www.apis.v1.http.response import respond_500

gs = singleton
router = APIRouter()


class Prompts(BaseModel):
    prompt: str


async def get_Prompt(prompt):
    return generate_prompt(prompt)


@router.post('/api/v1/prompts/dream', status_code=201)
async def post(p_json: Prompts):
    try:

        return await get_Prompt(p_json.prompt)


    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = 'prompts Error: ' + str(e)
        respond_500(message)

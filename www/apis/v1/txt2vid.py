


import random

from PIL.PngImagePlugin import PngInfo
from flask_restx import Namespace, Resource
from flask import request
from sd.txt2img import run_txt2img_json

# from multipart import tob


api = Namespace(
    name="Text to Image",
    path="/txttoimg",
    description="Text to Image Related operations"
)


def get_default_dict():
    return {
        'dynamic_threshold': None,
        'static_threshold': None,
    }


@api.route('/run', methods=['POST'])
@api.param('body', 'The JSON Data', consumes="application/json")
def post():
    pass

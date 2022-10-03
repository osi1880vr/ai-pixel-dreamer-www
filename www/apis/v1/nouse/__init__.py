"""


from flask import Blueprint
from flask_restx import Api

import os
from omegaconf import OmegaConf
from sd.singleton import singleton

gs = singleton

from .settings import api as settings_api
from .canvas import api as canvas_api
from .txt2img import api as txt2img_api
from .txt2vid import api as txt2vid_api

blueprint = Blueprint('api', __name__)

api = Api(
    blueprint,
    title='AI-Pixel Api',
    version='1.0',
    description='API for serving a frontend ui',
    contact="osi1880vr@gmail.com"
)

api.add_namespace(settings_api)
api.add_namespace(canvas_api)
api.add_namespace(txt2img_api)
api.add_namespace(txt2vid_api)
"""

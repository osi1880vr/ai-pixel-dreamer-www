from flask import Blueprint
from flask_restx import Api

import os
from omegaconf import OmegaConf
from sd.singleton import singleton
g_store = singleton
g_store.defaults = OmegaConf.load("sd/config/webui_streamlit.yaml")
if (os.path.exists("sd/config/userconfig_streamlit.yaml")):
	user_defaults = OmegaConf.load("sd/config/userconfig_streamlit.yaml")
	g_store.defaults = OmegaConf.merge(g_store.defaults, user_defaults)


from .txt2img import api as txt2img_api
from .settings import api as settings_api

blueprint = Blueprint('api', __name__)

api = Api(
	blueprint,
	title='AI-Pixel Api',
	version='1.0',
	description='API for serving a frondend ui',
	contact="osi1880vr@gmail.com"
)

api.add_namespace(txt2img_api)
api.add_namespace(settings_api)

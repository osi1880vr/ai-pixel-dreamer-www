import json
from flask import request
from flask_restx import Namespace, Resource
from sd.txt2img import run_txt2img_json
from flask import send_file
import io
from PIL.PngImagePlugin import PngInfo
from flask import jsonify
import os

import random

api = Namespace(
	name="Text to Image",
	path="/txttoimg",
	description="Text to Image Related operations"
)


@api.route('/run', methods=['POST','GET'])
@api.param('body', 'The JSON Data', _in="formData")
class run_txt2img(Resource):

	def post(self):
		try:
			txt2img_json = request.get_json()

			print(txt2img_json, flush=True)
			"""
			work_json = {
				"keyframes":null,
				"prompt": "a cyberpunk setup with plenty rain and a woman walking down the steet with no umbrella",
				"steps": 20,
				"sampler": "klms",
				"RealESRGAN_model":"",
				"iterations": 1,
				"batch_size": 1,
				"scale": 7.5,
				"seed": null,
				"H": 512,
				"W": 512,
				"separate_prompts": false,
				"normalize_prompt_weights": true,
				"save_individual_images": true,
				"group_by_prompt": true,
				"save_as_jpg": false,
				"use_GFPGAN": false,
				"use_RealESRGAN": false,
				"RealESRGAN_model": false,
				"fp":null,
				"variant_amount": 0.0,
				"variant_seed": null,
				"write_info_files": true,
				"render_mode": "txt2img"
			}
			
			"""





			mdata = PngInfo()
			image = run_txt2img_json(txt2img_json)
			print(type(image[0]), flush=True)
			print(os.getcwd(), flush=True)

			rnd = str(random.randrange(10000000000))

			image[0].save(f"www/web/static/img/" + rnd + "temp.png", pnginfo=mdata)
			return jsonify({"url": "img/"+rnd +"temp.png"})
			return {'success': True}, 200
		except Exception as e:
			print(e, flush=True)
			return {'success': False}, 500

	def get(self):
		return {'success': True}, 200


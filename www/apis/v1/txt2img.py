import json
from flask import request
from flask_restx import Namespace, Resource
from sd.txt2img import run_txt2img_json, run_txt2img_json_single
from flask import send_file
import io
from PIL.PngImagePlugin import PngInfo
from flask import jsonify
import os
from flask import make_response
import random
from io import BytesIO
import multipart as mp

# from multipart import tob


api = Namespace(
    name="Text to Image",
    path="/txttoimg",
    description="Text to Image Related operations"
)


def get_default_dict():
    return {"keyframes": "",
            "prompt": "a cyberpunk setup with plenty rain and a woman walking down the steet with no umbrella",
            "steps": 20,
            "sampler": "klms",
            "realesrgan_model_name": "",
            "iterations": 1,
            "batch_size": 1,
            "scale": 7.5,
            "H": 512,
            "W": 512,
            "separate_prompts": False,
            "normalize_prompt_weights": True,
            "save_individual_images": True,
            "group_by_prompt": True,
            "save_as_jpg": False,
            "use_gfpgan": False,
            "use_realesrgan": False,
            "realesrgan_model": False,
            "fp": "",
            "variant_amount": 0.0,
            "variant_seed": "",
            "write_info_files": True,
            "render_mode": "txt2img"}


@api.route('/run', methods=['POST'])
@api.param('body', 'The JSON Data', consumes="application/json")
class run_txt2img(Resource):

    def post(self):
        try:
            txt2img_json = request.get_json()

            mdata = PngInfo()
            images = run_txt2img_json(txt2img_json)
            rnd = int(random.randrange(10000000000))
            img_names = []
            for img in images:
                filename = f"www/web/static/img/" + str(rnd) + "temp.png"
                img.save(filename, pnginfo=mdata)
                imagename = f"/img/" + str(rnd) + "temp.png"

                img_names.append(imagename)
                rnd += 1
            print(img_names, flush=True)
            return img_names
        except Exception as e:
            print(e, flush=True)
            return {'success': False}, 500


@api.route('/explorer/run', methods=['POST'])
# @api.param('body', 'The JSON Data',  consumes="multipart/form-data")
class run_txt2img(Resource):

    def post(self):
        try:
            my_data = get_default_dict()

            print(request.form)


            my_data['prompt'] = request.form.get('prompt', default="countryside landscape, Trending on artstation.")
            my_data['W'] = min(request.form.get('width', default=512, type=int), 2048)
            my_data['H'] = min(request.form.get('height', default=512, type=int), 2048)
            my_data['scale'] = request.form.get('guidance', default=7.0, type=float)
            my_data['seed'] = request.form.get('seed', default=random.randint(0, 99999999), type=int)
            my_data['steps'] = min(request.form.get('steps', default=50, type=int), 150)
            my_data['iterations'] = min(request.form.get('samples', default=1, type=int), 8)
            my_data['blend_mask'] = ""
            my_data['return_changes_only'] = request.form.get('returnChangesOnly', default=False, type=bool)

            txt2img_json = json.dumps(my_data)

            print(txt2img_json)

            mdata = PngInfo()
            image = run_txt2img_json_single(txt2img_json)

            rnd = int(random.randrange(10000000000))
            filename = f"www/web/static/img/" + str(rnd) + "temp.png"
            image.save(filename, pnginfo=mdata)

            response = make_response(send_file(filename, download_name='test.png'))
            response.headers['Access-Control-Expose-Headers'] = 'Imagine-Seed'
            response.headers['Imagine-Seed'] = my_data['seed']
            return response
        except Exception as e:
            print(e, flush=True)
            return {'success': False}, 500

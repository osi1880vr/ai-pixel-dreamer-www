import json

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

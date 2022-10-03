import random

from PIL.PngImagePlugin import PngInfo
from flask_restx import Namespace, Resource
from flask import request
from sd.txt2img import run_txt2img_json

# from multipart import tob
from www.apis.v1.http.response import respond_500
#namespace gets activated inside of __init__.py
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
            message = 'txt2img error' + str(e)
            respond_500(message)

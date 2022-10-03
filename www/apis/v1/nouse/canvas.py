import json
import os
import random
from PIL.PngImagePlugin import PngInfo


from flask_restx import Namespace, Resource
from flask import send_file
from flask import make_response
from flask import request


#from sd.outpaint import outpaint_txt2img

#namespace gets activated inside of __init__.py
api = Namespace(
    name="Canvas",
    path="/canvas",
    description="gggg"
)

tmp_directory = "./outputs/outpaint/"
global_prefix = 'outpaint'
output_directory = "./outputs/outpain_out"

current_id = 1

os.makedirs(tmp_directory, exist_ok=True)
os.makedirs(global_prefix, exist_ok=True)


def get_default_dict():
    return {
        "C" : 4,
        "f" : 8,
        "dyn" : None,
        "from_file": None,
        "n_rows" : 2,
        "plms" : False,
        "ddim_eta" : 0.0,
        "n_iter" : 1,
        "outdir" : output_directory,
        "skip_grid" : False,
        "skip_save" : True, #FIXME
        "fixed_code": False,
        "save_intermediate_every": 1000
    }



@api.route('/run', methods=['POST'])
# @api.param('body', 'The JSON Data',  consumes="multipart/form-data")
class RunCanvas(Resource):

    def post(self):
        try:
            my_data = get_default_dict()

            #my_data['strength'] = 0.5  # why it is missing?

            my_data['file_prefix'] = f"{global_prefix}_{current_id}"

            my_data['prompt'] = request.form.get('prompt', default="countryside landscape, Trending on artstation.")
            my_data['W'] = min(request.form.get('width', default=512, type=int), 2048)
            my_data['H'] = min(request.form.get('height', default=512, type=int), 2048)
            my_data['scale'] = request.form.get('guidance', default=7.0, type=float)
            my_data['seed'] = request.form.get('seed', default=random.randint(0, 99999999), type=int)
            my_data['steps'] = min(request.form.get('steps', default=50, type=int), 150)
            my_data['n_samples'] = min(request.form.get('samples', default=1, type=int), 8)
            my_data['blend_mask'] = None
            #my_data['return_changes_only'] = request.form.get('returnChangesOnly', default=False, type=bool)

            if 'imageGuide' in request.files and request.files['imageGuide'].filename != '':
                path = os.path.join(tmp_directory, f"{global_prefix}_{current_id}.png")
                request.files['imageGuide'].save(path)
                my_data['image_guide'] = path

                if 'maskForBlend' in request.files and \
                        request.files['maskForBlend'].filename != '':
                    mask_path = os.path.join(
                        tmp_directory, f"{global_prefix}_{current_id}_mask.png")
                    request.files['maskForBlend'].save(mask_path)
                    my_data['blend_mask'] = mask_path
                    my_data['mask_blur'] = max(request.form.get('maskBlur',  default=10, type=int), 0)
                else:
                    my_data['strength'] = max(min(request.form.get('strength', default = 0.5, type = float), 0.99), 0.01)

            else:
                my_data['image_guide'] = False

            mdata = PngInfo()

            image = outpaint_txt2img(my_data)
            rnd = int(random.randrange(10000000000))
            filename = f"www/web/static/img/" + str(rnd) + "temp.png"

            image[0].save(filename, pnginfo=mdata)

            response = make_response(send_file(filename, download_name='test.png'))
            response.headers['Access-Control-Expose-Headers'] = 'Imagine-Seed'
            response.headers['Imagine-Seed'] = my_data['seed']
            return response
        except Exception as e:
            print(e, flush=True)
            return {'success': False}, 500

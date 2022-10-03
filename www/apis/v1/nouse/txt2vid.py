import os
import sys

from flask import request
from flask_restx import Namespace, Resource

import sd.sd_video as sd_video
from www.apis.v1.http.response import respond_500
from sd.singleton import singleton

gs = singleton


#namespace gets activated inside of __init__.py
api = Namespace(
    name="Text to Video",
    path="/txttovid",
    description="Text to Video Related operations"
)

def get_default_dict():
    return {
        'dynamic_threshold': None,
        'static_threshold': None,
    }


@api.route('/run', methods=['POST'])
@api.param('body', 'The JSON Data', consumes="application/json")
class run_txt2vid(Resource):

    def post(self):
        try:
            txt2vid_json = request.get_json()

            sd_video.run_batch(txt2vid_json)

        except Exception as e:
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            print(exc_type, fname, exc_tb.tb_lineno)
            message = 'txt2vid Error: ' + str(e)
            respond_500(message)



@api.route('/get_results', methods=['GET'])
# @api.param('body', 'The JSON Data', consumes="application/json")
class get_results_txt2vid(Resource):

    def get(self):
        try:

            return gs.current_video_frames

        except Exception as e:
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            print(exc_type, fname, exc_tb.tb_lineno)
            message = 'txt2vid Error: ' + str(e)
            respond_500(message)

    pass

import json
from flask import request
from flask_restx import Namespace, Resource
from sd.txt2img import run_txt2img_json

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

			run_txt2img_json(txt2img_json)

			return {'success': True}, 200
		except:
			return {'success': False}, 500

	def get(self):
		return {'success': True}, 200


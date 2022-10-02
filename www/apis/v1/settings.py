import json
from flask_restx import Namespace, Resource
from flask import jsonify
from flask import request

from sd.singleton import singleton

gs = singleton

import os

# namespace gets activated inside of __init__.py
api = Namespace(
    name="Settings",
    path="/settings",
    description="Settings related operations"
)

@api.route('/get', methods=['GET'])
class settings(Resource):
    def get(self):
        try:
            f = open("www/web/static/config/webui_settings.json", "r")
            text = f.read()
            return jsonify(text)
        except Exception as e:
            print(e, flush=True)
            return {"success": False,
                    "error": str(e)}, 500


@api.route('/set', methods=['POST'])
@api.param('body', 'The JSON Data', consumes="application/json")
class settings(Resource):
    def post(self):
        try:
            settings_json_txt = json.dumps(request.get_json())
            with open("www/web/static/config/webui_settings.json", 'w') as f:
                f.write(settings_json_txt)
            f.close()
            return {"success": True}, 200
        except Exception as e:
            print(e, flush=True)
            return {"success": False,
                    "error": str(e)}, 500

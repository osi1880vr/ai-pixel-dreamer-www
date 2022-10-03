from fastapi import APIRouter, File, UploadFile, Form
from sd.singleton import singleton

gs = singleton


router = APIRouter()



@router.get("/api/v1/settings/get")
async def read_settings():
    try:
        f = open("www/web/static/config/webui_settings.json", "r")
        text = f.read()
        return text
    except Exception as e:
        print(e, flush=True)
        return {"success": False,
                "error": str(e)}, 500



@router.post('/api/v1/settings/set')
async def post():
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

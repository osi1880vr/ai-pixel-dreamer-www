from fastapi import APIRouter, File, UploadFile, Form
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

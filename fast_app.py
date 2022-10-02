import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from sd.singleton import singleton

import www.setup_loader.settings as settings

gs = singleton
settings.load_settings_json()

app = FastAPI()


from www.apis.v1.routes import canvas
app.include_router(canvas.router)



@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}


@app.get("/api/v1/settings/get")
async def read_settings():
    try:
        f = open("www/web/static/config/webui_settings.json", "r")
        text = f.read()
        return text
    except Exception as e:
        print(e, flush=True)
        return {"success": False,
                "error": str(e)}, 500





app.mount("/", StaticFiles(directory="www/web/static", html=True), name="static")


uvicorn.run(app, host="127.0.0.1", port=8080)

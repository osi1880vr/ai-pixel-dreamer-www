import logging
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from sd.singleton import singleton
gs = singleton

import www.setup_loader.settings as settings
settings.load_settings_json()

from www.apis.v1.routes import canvas
from www.apis.v1.routes import settings



app = FastAPI()
logging.basicConfig(level=logging.DEBUG)   # add this line
logger = logging.getLogger("foo")
app.include_router(canvas.router)
app.include_router(settings.router)



app.mount("/", StaticFiles(directory="www/web/static", html=True), name="static")


uvicorn.run(app, host="127.0.0.1", port=8080, log_level="debug")

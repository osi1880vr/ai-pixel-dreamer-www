import datetime
import socket
import os
from asgiref.wsgi import WsgiToAsgi
import eventlet
from eventlet import wsgi
from flask import Flask, redirect
from flask_cors import CORS
from www.middleware.counter import CounterMiddleware
from werkzeug.middleware.proxy_fix import ProxyFix

import setup_loader.settings as settings
from sd.singleton import singleton

gs = singleton

settings.load_settings_json()

from www.apis.v1 import blueprint


#eventlet.monkey_patch()

app = Flask('adi_api',
			static_url_path='',
			static_folder='www/web/static')
#app.wsgi_app = CounterMiddleware(app.wsgi_app)
#app.wsgi_app = ProxyFix(app.wsgi_app)
CORS(app)

@app.route("/")
def index():
	return redirect('index.html')

app.register_blueprint(blueprint, url_prefix='/api/v1')


asgi_app = WsgiToAsgi(app)

#hostname = socket.gethostname()
#local_ip = socket.gethostbyname(hostname)
#wsgi.server(eventlet.listen(('127.0.0.1', 8080)), app)

import datetime
import socket
import os
from asgiref.wsgi import WsgiToAsgi
import eventlet
from eventlet import wsgi
from flask import Flask, redirect
from www.middleware.counter import CounterMiddleware
from werkzeug.middleware.proxy_fix import ProxyFix
from flask_cors import CORS, cross_origin
from www.apis.v1 import blueprint

from sd.file_io import save_image

eventlet.monkey_patch()

app = Flask('adi_api',
			static_url_path='',
			static_folder='www/web/static',
			template_folder='www/web/templates')
app.wsgi_app = CounterMiddleware(app.wsgi_app)
app.wsgi_app = ProxyFix(app.wsgi_app)
CORS(app)

app.register_blueprint(blueprint, url_prefix='/api/v1')


@app.route("/")
def index():
	return redirect('index.html')



#hostname = socket.gethostname()
#local_ip = socket.gethostbyname(hostname)
wsgi.server(eventlet.listen(('localhost', 8080)), app)

import datetime
import socket
import os
from asgiref.wsgi import WsgiToAsgi
import eventlet
from eventlet import wsgi
from flask import Flask, redirect
from flask_cors import CORS
from middleware.counter import CounterMiddleware
from werkzeug.middleware.proxy_fix import ProxyFix

from apis.v1 import blueprint




eventlet.monkey_patch()

app = Flask('vms_api',
			static_url_path='',
			static_folder='www/web/static',
			template_folder='www/web/templates')
app.wsgi_app = CounterMiddleware(app.wsgi_app)
app.wsgi_app = ProxyFix(app.wsgi_app)
CORS(app)





@app.route("/")
def index():
	return redirect('index.html')


app.register_blueprint(blueprint, url_prefix='/api/v1')

if __name__ == '__main__':
	hostname = socket.gethostname()
	local_ip = socket.gethostbyname(hostname)
	wsgi.server(eventlet.listen(('0.0.0.0', 8080)), app)
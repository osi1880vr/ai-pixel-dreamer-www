import os


class CounterMiddleware:
	"""
	Simple Counter Middleware
	"""

	def __init__(self, app):
		self.app = app
		self.env_key = "REQUESTS"
		os.environ[self.env_key] = "0"

	def __call__(self, environ, start_response):
		os.environ[self.env_key] = str(int(os.environ[self.env_key]) + 1)
		return self.app(environ, start_response)

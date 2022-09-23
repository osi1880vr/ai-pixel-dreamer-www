from datetime import datetime


class logger:

	def log(self, log_text, log_type='info'):
		log_time = str(datetime.now())

		try:
			print(log_time + ':  ' + log_type + ' ' + str(log_text))
		except:
			try:
				print(log_time + ': ERROR can not print log_text')
			except:
				log_time_type = type(log_time)
				log_type_type = type(log_type)
				log_text_type = type(log_text)
				print('ERROR can not print log_text. time_type: ' + str(log_time_type) + ' log_type: ' + str(log_type_type) + ' text_type: ' + str(log_text_type))

class CorsMiddleware(object):
    def process_response(self, req, resp):
    	print('test')
        response["Access-Control-Allow-Origin"] = "*"
        return response
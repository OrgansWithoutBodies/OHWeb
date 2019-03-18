class CorsMiddleware(object):
    def __init__(self,get_response):
        self.get_response=get_response
    def parse(self,loc):
        try:
            ps=loc.split('://')
            prot=ps[0]
            port=""
            uri=""
            url=ps[1].split('/')[0]
            return url
        except:
            return loc

    def __call__(self, request):
        # response["Access-Control-Allow-Origin"] = "http://oh.vsipaddress.com/"
      
        default_headers = ('accept','accept-encoding','authorization','content-type','dnt','origin','user-agent','x-csrftoken','x-xsrf-token','x-requested-with',)
        ALLOWED_ORIGINS=('oh.vsipaddress.com',"localhost:8080","localhost:8000")
        response=self.get_response(request)
        origin=request.META.get("HTTP_ORIGIN")
        if(self.parse(origin) in ALLOWED_ORIGINS):
            response["Access-Control-Allow-Origin"]=origin
            # print(response.content)
        else:
            # print(self.parse(origin))
            response["Access-Control-Allow-Origin"]=""
        response["Access-Control-Allow-Credentials"]='true'
        response["Access-Control-Allow-Headers"]=', '.join(default_headers)
        return response
from django.shortcuts import render

from bokeh.client import pull_session
from bokeh.embed import server_session,server_document

# Create your views here.

#@TODO - heatmap of houses visited as holoviews objs - geoviews 
def bokehview(request):
 #   with pull_session(url="http://localhost:5006/sliders") as session:
#
 #       # update or customize that session
  #      session.document.roots[0].children[1].title.text = "Special Sliders For A Specific User!"
#
 #       # generate a script to load the customized session
  #      script = server_session(session_id=session.id, url='http://localhost:5006/sliders')
#
 #       # use the script in the rendered page
  #      return render("embed.html"

    script = server_session(url="http://104.248.72.142/app",session_id="django")
    
    context={
        'script':script
    }
    return render(request,"OHBokeh/base.html",context)

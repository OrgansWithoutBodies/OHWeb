from django.shortcuts import render

# Create your views here.
def baseview(request):
	context={}
	return render(request,"OHScheduler/base.html",context)
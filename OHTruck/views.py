from django.shortcuts import render
# Create your views here.
def base(request):
	context={
	}

	return render(request,"OHTruck/dist/index.html",context)


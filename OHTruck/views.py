from django.shortcuts import render
from django.http import JsonResponse

from .viewsets import *
from .forms import *
# Create your views here.
def mintriptime(request,stops=[],backend="GM"):

	content={'test':2}
	return JsonResponse(content)
def truckadmin(request):
	context={

	}

	return render(request,"OHTruck/index.html",context)
def requestPickup(request):
	context={
		'stoptype':StopForm,
		'donor':DonorForm,
		'reqdon':RequestedDonationForm
	}
	return render(request,"OHTruck/requestPickup.html",context)
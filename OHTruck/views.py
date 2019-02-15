from django.shortcuts import render
from .viewsets import *
from .forms import *
# Create your views here.
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
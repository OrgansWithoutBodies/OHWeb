from django.shortcuts import render
from django.http import JsonResponse

import geopy
from geopy.geocoders import Nominatim as Nom 
from rest_framework.decorators import api_view,parser_classes
from rest_framework.parsers import JSONParser

from .viewsets import *
from .forms import *
from .searchers import *
# Create your views here.
strcache={}
def parseAddress(rawStr):

	spacedAdd=' '.join([word for word in rawStr.split('_')])
	
	return spacedAdd

def geocode(request,rawStr,*arg,**kw):

	strAddress=parseAddress(rawStr)
	if strAddress in strcache.keys():#checks if address has already been geocoded - reduces api load
		latlon=strcache[strAddress]
		print(strcache)
	else:
		gcoder=Nom()
		print(strAddress)

		try:
			code=gcoder.geocode(strAddress)
			latlon={'lat':code.latitude,'lon':code.longitude}
		except:
			print('couldnt resolve '+strAddress)
			latlon={'lat':null,'lon':null}
		strcache[strAddress]=latlon
	return JsonResponse({strAddress:latlon})

def mintriptime(request,stops=[],backend="GM"):

	
	greedySearcher(salesstops,)
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
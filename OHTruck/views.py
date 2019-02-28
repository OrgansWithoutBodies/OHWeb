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
OHLatLon=38.353184, -121.975337
testadds=['793 Gold Coast Dr','626 Diablo Ct','615 Renaissance Ave']
def parseAddress(rawStr):

    spacedAdd=' '.join([word for word in rawStr.split('_')])
    
    return spacedAdd

def geocode(request,rawStr,*arg,**kw):

    strAddress=parseAddress(rawStr)
    if strAddress in strcache.keys():#checks if address has already been geocoded - reduces api load
        latlon=strcache[strAddress]
        
    else:
        gcoder=Nom()
        
        try:
            code=gcoder.geocode(strAddress)
            latlon={'lat':code.latitude,'lng':code.longitude}
        except:
            print('couldnt resolve '+strAddress)
            latlon={'lat':null,'lng':null}
        strcache[strAddress]=latlon
    return JsonResponse({strAddress:latlon})
def osrmTrip(points=testroute,stopStr=None,baseurl='http://localhost:5000/'):
    if stopStr is None:
        stopStr=';'.join([','.join([str(p[1]),str(p[0])]) for p in points])
    url=baseurl+'trip/v1/driving/'+stopStr+'?roundtrip=true&geometries=geojson'
    resp=req.urlopen(url).read()
    return json.loads(resp)

def mintriptime(request,stopStr='',backend="GM"):
    trip=osrmTrip(stopStr=stopStr)
    waypts=trip['waypoints']
    
    print(waypts)
    print(trip)
    
    # stops=[[float(l) for l in s.split(',')] for s in stopStr.split(';')]
    
    # time=greedySearcher(stops,osrmMetric).currentRoute
    content={
        # 'mintime':time,
        'waypts':waypts,
        'trips':trip['trips']
    }
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
import geopy
from geopy.geocoders import Nominatim as Nom 
from rest_framework.decorators import api_view,parser_classes
from rest_framework.parsers import JSONParser

from .searchers import *

codecache={}
OHLatLon=38.353184, -121.975337
def parseAddress(rawStr):

    spacedAdd=' '.join([word for word in rawStr.split('_')])
    
    return spacedAdd

def geocode(rawStr,*arg,**kw):

    strAddress=parseAddress(rawStr)
    if strAddress in codecache.keys():#checks if address has already been geocoded - reduces api load
        latlon=codecache[strAddress]
        
    else:
        gcoder=Nom()
        
        try:
            code=gcoder.geocode(strAddress)
            latlon={'lat':code.latitude,'lng':code.longitude}
        except:
            print('couldnt resolve '+strAddress)
            latlon={'lat':null,'lng':null}
        codecache[strAddress]=latlon
    return {strAddress:latlon}
def osrmTrip(points=None,stopStr=None,baseurl='http://osrm.vizsrv.net/'):
    if stopStr is None:
        stopStr=';'.join([','.join([str(p[1]),str(p[0])]) for p in points])
    url=baseurl+'trip/v1/driving/'+stopStr+'?roundtrip=true&geometries=geojson'
    resp=req.urlopen(url).read()
    return json.loads(resp)

def mintriptime(stopStr='',backend="GM"):
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
    return content
from rest_framework import routers

from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path,include,re_path

from .views import * 

router = routers.DefaultRouter()

router.register(r'donors', DonorViewSet)
router.register(r'trips', TripViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'donations', DonationViewSet)
router.register(r'trucks', TruckViewSet)
router.register(r'stops', StopViewSet)

app_name="TRUCK"
#Designed to use a geocoding service & a routing service 
urlpatterns = [
	path('api/',include(router.urls)),    

    path('', truckadmin,name="/"),
    path('request/',requestPickup,name="request"),
    path('request/submit',requestPickup),
    
    path('geo/<rawStr>/',geocode),
    path(r'min/<stopStr>/',mintriptime),
]

from rest_framework import routers

from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path,include

from .views import * 

router = routers.DefaultRouter()
router.register(r'donors', DonorViewSet)
router.register(r'trips', TripViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'donations', DonationViewSet)

urlpatterns = [
    #path('', admin.site.urls),
    
    path('', truckadmin),
    path('request/',requestPickup),
	path('api/',include(router.urls)),    
   # path('signs/',include('OHSigns.OHWebSigns.urls')),
]

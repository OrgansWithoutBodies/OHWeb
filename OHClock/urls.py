from rest_framework import routers

from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path,include,re_path

from .views import * 

router = routers.DefaultRouter()
router.register(r'punches', PunchViewSet)
router.register(r'admins', AdminViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'actions', ActionViewSet)

app_name="CLOCK"
#Designed to use a geocoding service & a routing service 
urlpatterns = [
    #path('', admin.site.urls),
    
    path('', clockview),
	path('api/',include(router.urls)),    
   # path('signs/',include('OHSigns.OHWebSigns.urls')),
]

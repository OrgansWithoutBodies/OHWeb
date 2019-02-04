
from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path,include
from .views import *

urlpatterns = [
    #path('', admin.site.urls),
    
    path('', TemplateView.as_view(template_name="OHTruck/index.html")),
    
   # path('signs/',include('OHSigns.OHWebSigns.urls')),
]

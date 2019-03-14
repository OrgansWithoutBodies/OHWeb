"""OHWeb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include

from .views import * 

urlpatterns = [
    path('truck/',include('OHTruck.urls',namespace="TRUCK")),
    path('schedule/',include('OHScheduler.urls',namespace="SCHED")),
    path('dock/',include('OHDock.urls',namespace="DOCK")),
    path('clock/',include('OHClock.urls',namespace="CLOCK")),
    path('bokeh/',include('OHBokeh.urls',namespace="GRAPH")),
    path('signs/',include('OHSigns.urls',namespace="SIGNS")),
    path('',landingPage),
   
  #  path('site/',include('OHSite.urls')), 
]

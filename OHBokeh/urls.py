from django.views.generic.base import RedirectView
from django.urls import path
from .views import * 

urlpatterns = [
    path('',bokehview,name='bk'),
]

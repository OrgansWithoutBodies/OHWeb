from django.views.generic.base import RedirectView
from django.urls import path
from .views import * 

app_name="GRAPH"
urlpatterns = [
    path('',bokehview,name='bk'),
]

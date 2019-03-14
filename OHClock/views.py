from django.shortcuts import render
from .viewsets import *

def clockview(request):
    context={

    }

    return render(request,"OHClock/index.html",context)
# Create your views here.

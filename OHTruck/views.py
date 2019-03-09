from django.shortcuts import render
from django.http import JsonResponse

from .viewsets import *
from .forms import *
from .searchers import *
from . import mapping 
# Create your views here.
def geocode(request,rawStr,*arg,**kw):
    return JsonResponse(mapping.geocode(rawStr,*arg,**kw))
def mintriptime(request,stopStr='',backend="GM"):
    return JsonResponse(mapping.mintriptime(stopStr,backend))

def truckadmin(request):
    context={

    }

    return render(request,"OHTruck/admin.html",context)
def requestPickup(request):
    if request.method=="POST":
        stp=StopForm(request.POST)
        dnr=DonorForm(request.POST)
        don=RequestedDonationForm(request.POST)
        print('testing')
        if stp.is_valid() & dnr.is_valid() & don.is_valid():
            print(dnr.cleaned_data)
            d=dnr.cleaned_data
            ds=Donor.objects.filter(Firstname__exact=d['Firstname'],Lastname__exact=d['Lastname'],Address__exact=d['Address'])
            if len(ds)==0:
                dnrobj=Donor.objects.create(**dnr.cleaned_data)
            else:
                dnrobj=ds[0]
                print(dnrobj.id)
            stpobj=Stop.objects.create(**stp.cleaned_data,RequesterId=dnrobj)
            stpid=Stop.objects.filter(**stp.cleaned_data)
            # print(stpid)
            RequestedDonation.objects.create(**don.cleaned_data,StopId=stpobj)
    context={
        'stoptype':StopForm(),
        'donor':DonorForm,
        'reqdon':RequestedDonationForm
    }
    return render(request,"OHTruck/requestPickup.html",context)
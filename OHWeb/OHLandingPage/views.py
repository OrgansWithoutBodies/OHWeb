from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required,user_passes_test


def landingPage(request):
	return render(request,"OHLandingPage/landingPage.html")

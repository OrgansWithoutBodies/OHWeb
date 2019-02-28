from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required,user_passes_test

from .models import *

def is_emp(user):
	return  user.groups.filter(name="Employee").exists()
def is_sch(user):
	return  user.groups.filter(name="Scheduler").exists()
# Create your views here.
@login_required
@user_passes_test(is_sch)
def baseview(request):
	context={}
	return render(request,"OHScheduler/admin.html",context)

@login_required
@user_passes_test(is_emp)
def employeeview(request):
	print('testing')
	user=request.user
	# shifts=ScheduledShift.objects.get(EmployeeID=user)#@TODO - make sure it gets referenced user id
	context={'user':user}
	return render(request,"OHScheduler/EmployeeView.html",context)
	# if context['user'].is_authenticated:
	# else:
	# 	return redirect(request,"",context)
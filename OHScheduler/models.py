from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
class Employee(models.Model):
	AuthUser=models.OneToOneField(get_user_model(),on_delete=models.CASCADE,primary_key=True,related_name="schedemp",help_text="Django 'User' object used for authorization - if adding new must press + button then edit button to input first&last name") #auth'd user using django's built-in authentication instead of reinventing the wheel - https://docs.djangoproject.com/en/2.1/topics/auth/customizing/#referencing-the-user-model
	Nickname=models.CharField(max_length=10,blank=True)
	# print(AuthUser.first_name)
	# Firstname=AuthUser.first_name
	# Lastname=AuthUser.last_name
	@property
	def Firstname(self):	
		return self.AuthUser.first_name

	@property
	def Lastname(self):	
		return self.AuthUser.last_name

	def __str__(self):
		if (self.Firstname is not '') & (self.Lastname is not ''):
			if self.Nickname:
				nickstr=' ("'+self.Nickname+'") '
			else:
				nickstr=''
			return self.Firstname+nickstr+self.Lastname
		else:
			return self.AuthUser.username
class Date(models.Model):
	Day=models.DateField(primary_key=True)

class ScheduledShift(models.Model):#Scheduled or ScheduledShift?
	EmployeeID=models.ForeignKey("Employee",on_delete=models.CASCADE)
	Date=models.ForeignKey("Date",on_delete=models.CASCADE)
	DetailID=models.ForeignKey("Details",on_delete=models.SET_NULL,null=True,blank=True)
class Details(models.Model):
	TeamID=models.ForeignKey("Team",on_delete=models.CASCADE,null=True)
	RoleId=models.ForeignKey("Role",on_delete=models.SET_NULL,null=True,blank=True)
	Order=models.IntegerField(null=True)

class Team(models.Model):
	Name=models.CharField(max_length=20)
	Order=models.IntegerField(null=True)
	Color=models.CharField(max_length=10)
class Role(models.Model):#use Begindate/(Enddate)?
	Name=models.CharField(max_length=10)
class Event(models.Model): #Affect global schedule on specific day(s) - https://www.databasezone.com/techdocs/DesigningTheCalendarHolidayDb.html
	RECURS=(("SN","Single Event"),("FX","Fixed Date of Year"),("MV","Moveable Date of Year"))

	SpecialHours=models.CharField(max_length=10)
	EventRecurrance=models.CharField(choices=RECURS,max_length=2)
	Criteria=models.CharField(max_length=10)#subtable of eventrecurrence? 
class Preference(models.Model):#Affect specific employee on specific day
	PREFS=(("NO","Can't Work"),("NS","If Necessary"),("YS","Can Work"))

	EmployeeID=models.ForeignKey("Employee",on_delete=models.CASCADE,null=True)
	Preference=models.CharField(choices=PREFS,max_length=2,null=True)

	# Day=models.ForeignKey()
class Vacation(models.Model):
	pass
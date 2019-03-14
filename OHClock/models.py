from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
class Employee(models.Model):
	AuthUser=models.ForeignKey(get_user_model(),on_delete=models.CASCADE,related_name="clockemp")

	def Firstname(self):	
		if self.AuthUser.first_name:
			return self.AuthUser.first_name
		else: return self.AuthUser.username

	def Lastname(self):	
		return self.AuthUser.last_name

	passphrase=models.CharField(max_length=10)
	class Meta:
		verbose_name_plural = "Employees"
class Admin(Employee):
	Permissions=models.CharField(max_length=20)
	
class Punch(models.Model):
	DIRS=(("IN","IN"),("OUT","OUT"))
	Direction=models.CharField(choices=DIRS,max_length=3)
	Timestamp=models.DateTimeField()
	EmpId=models.ForeignKey('Employee',on_delete="SET_NULL",null=True)
class AdminAction(models.Model):
	OPTS=(("CNC","CANCEL PUNCH"),("ADD","ADD PUNCH"),("EDT","EDIT PUNCH"))
	PunchId=models.ForeignKey("Punch",on_delete='SET_NULL',null=True)
	AdminId=models.ForeignKey('Admin',on_delete='SET_NULL',null=True,blank=True) #if this is a time change by an admin
	Action=models.CharField(choices=OPTS,max_length=3)

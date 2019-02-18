from django.db import models

# Create your models here.
def Employee(models.Model):
	Firstname=models.CharField(max_length=20)
	Lastname=models.CharField(max_length=20)

	passphrase=models.CharField(max_length=10)
def Admin(Employee):
	Permissions=models.CharField(max_length=20)
	
def Punch(models.Model):
	DIRS=(("IN","IN"),("OUT","OUT"))
	Direction=models.CharField(choices=DIRS,max_length=3)
	Timestamp=models.DateTimeField()
	EmpId=models.ForeignKey('Employee',on_delete="SET_NULL",null=True)
def AdminAction(models.Model):
	OPTS=(("CNC","CANCEL SHIFT"),("ADD","ADD SHIFT"))
	PunchId=models.ForeignKey("Punch",on_delete='SET_NULL',null=True)
	AdminId=models.ForeignKey('Admin',on_delete='SET_NULL',null=True,blank=True) #if this is a time change by an admin
	Action=models.CharField(choices=OPTS,max_length=3)

from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

testdb={"trips":
    [{
    "date":"11/13/2018",
    "employeeids":[12,3456]},
    {
    "date":"11/14/2018",
    "employeeids":[123,567]}],

"donors":[{"id":234,"firstname": "Test",
    "lastname": "Testerson",
    "address": "215 test ct",
    "phone": "12345",
    "email": "test",
    "other":"None"}],

"stops":[{"inputtime": 1234,
  "tripid": "11/13/2018",  
  "stopnum": 3,
  "stoptype":"pickup",
  "status": "Unmarked",
  "hidden":"false",
  "items": "None",
  "donorid": 234},
  {"inputtime": 9,
  "tripid": "11/14/2018",  
  "stopnum": 3,
  "stoptype":"pickup",
  "status": "Unmarked",
  "hidden":"false",
  "items": "None",
  "donorid":234},
  {"inputtime": 3456,
  "stopnum": 4,
  "stoptype":"dropoff",
  "status": "Called (Answer)",
  "items": "None",
  "hidden":"false",
  "donorid": 234}],
"employees":
[{"id":123,"firstname":"emp1"},
  {"id":567,"firstname":"emp2"},
  {"id":456,"firstname":"emp3"}]
}

class Trip(models.Model):
	Date=models.DateField()
	Truck=models.ForeignKey('Truck',on_delete=models.SET_NULL,null=True,blank=True)
	def __str__(self):
		return str(self.Date)
class CabSpot(models.Model):#many-to-many intermediate table for employees in trip
	TripId=models.ForeignKey('Trip',on_delete=models.SET_NULL,null=True,blank=True)
	EmpId=models.ForeignKey('Employee',on_delete=models.SET_NULL,null=True,blank=True)
class Employee(models.Model):
	AuthUser=models.OneToOneField(get_user_model(),primary_key=True,on_delete=models.CASCADE,related_name="truckemp")
	

	@property
	def Firstname(self):	
		if self.AuthUser.first_name:
			return self.AuthUser.first_name
		else: return self.AuthUser.username

	@property
	def Lastname(self):	
		return self.AuthUser.last_name

	Driverstatus=models.BooleanField(help_text="Is Authorized to Drive Truck?")
	def __str__(self):
		if self.Firstname is not None:
			if self.Driverstatus:
				driverstr=" (DRIVER)" 
			else:
				driverstr= ""
			return self.Firstname+driverstr
		else:
			return self.AuthUser

class Truck(models.Model):
	LicensePlate=models.CharField(max_length=20)
	Capacity=models.CharField(max_length=10)
	Status=models.CharField(max_length=30)
	CabSpots=models.IntegerField(default=2,help_text="Max number of Employees who can fit in cab")
	GasCapacity=models.DecimalField(max_digits=6,decimal_places=2)
class TruckAttachment(models.Model):
	AttachedTo=models.ForeignKey('Truck',on_delete=models.SET_NULL,blank=True,null=True)
	Capacity=models.CharField(max_length=10)
class GasStop(models.Model):
	Address=models.CharField(max_length=30)
	TruckFilled=models.ForeignKey('Truck',on_delete=models.SET_NULL,blank=True,null=True)
	GallonsFilled=models.DecimalField(max_digits=5,decimal_places=2)
	Cost=models.DecimalField(max_digits=6,decimal_places=2)
###
class Stop(models.Model):
	TYPES=[("PU","Pickup"),("DP","Dump"),("DV","Delivery"),("CU","House Cleanup")]
	STATUSES=[("RQ","Requested"),("CL","Called"),("SC","Scheduled"),("CM","Completed"),("ER","Error")]

	StopType=models.CharField(max_length=2,choices=TYPES,blank=True)
	
	RequesterId=models.ForeignKey('Donor',on_delete=models.SET_NULL,blank=True,null=True)
	RequestedTimestamp=models.DateTimeField(null=True,help_text="When Request was Submitted")
	
	ScheduledTrip=models.ForeignKey('Trip',on_delete=models.SET_NULL,blank=True,null=True)
	ScheduledOrder=models.IntegerField(blank=True,null=True)

	Status=models.CharField(max_length=2,choices=STATUSES)
	StatusDetail=models.CharField(max_length=50,blank=True,null=True)


class Donor(models.Model):
	Firstname=models.CharField(max_length=25)
	Lastname=models.CharField(max_length=25)
	Address=models.CharField(max_length=100,help_text="Where to visit")
	Phone=models.CharField(max_length=15)

	Email=models.EmailField(blank=True)
	Business=models.CharField(blank=True,max_length=30)

	OtherInfo=models.TextField(blank=True,help_text="Any other info that might be helpful in contacting you")
	def __str__(self):
		return self.Firstname+' '+self.Lastname
class Donation(models.Model):
	StopId=models.ForeignKey('Stop',on_delete=models.SET_NULL,blank=True,null=True)
	class Meta:
		abstract=True
class RequestedDonation(Donation):#Have one for each item?
	LOCATIONS=[("OUT","Outside location of residence (pickups clearly marked)"),("INF","Inside residence (first floor/garage)"),("INU","Inside residence (upper floor)")]

	RequestedTimeframe=models.DateTimeField(help_text="When would be best to complete this request",null=True)
	
	Items=models.TextField()
	ItemLocation=models.CharField(max_length=3,choices=LOCATIONS,help_text="Where items are located/should be delivered to")

class TakenDonation(Donation):
	ConfirmedTimestamp=models.DateTimeField(null=True)
	Items=models.TextField()
	DumpFee=models.IntegerField(default=0)
###

# class Delivery(models.Model):
# 	
# class Dump
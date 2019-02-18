from django.db import models

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

class CabSpot(models.Model):#many-to-many intermediate table for employees in trip
	TripId=models.ForeignKey('Trip',on_delete=models.SET_NULL,null=True,blank=True)
	EmpId=models.ForeignKey('Employee',on_delete=models.SET_NULL,null=True,blank=True)
class Trip(models.Model):
	Date=models.DateField()
	Truck=models.ForeignKey('Truck',on_delete=models.SET_NULL,null=True,blank=True)

class Employee(models.Model):
	Firstname=models.CharField(max_length=25)
	Lastname=models.CharField(max_length=25)
	Driverstatus=models.BooleanField(help_text="Is Authorized to Drive Truck?")
	def __str__(self):
		return self.Firstname
class Stop(models.Model):
	TYPES=[("PU","Pickup"),("DP","Dump"),("DV","Delivery"),("CU","House Cleanup")]
	StopType=models.CharField(max_length=2,choices=TYPES,blank=True)
	InputTime=models.DateTimeField()
	TripId=models.ForeignKey('Trip',on_delete=models.SET_NULL,blank=True,null=True)
	Status=models.CharField(max_length=50)


###

class Donor(models.Model):
	Firstname=models.CharField(max_length=25,help_text="Donor's First Name")
	Lastname=models.CharField(max_length=25,help_text="Donor's Last Name")
	Address=models.CharField(max_length=100,help_text="Item Location")
	Phone=models.CharField(max_length=15)

	Email=models.EmailField(blank=True)
	Business=models.CharField(blank=True,max_length=30)

	OtherInfo=models.TextField(blank=True,help_text="Any other info that might be helpful")
class Donation(models.Model):
	Timestamp=models.DateTimeField()
	StopId=models.ForeignKey('Stop',on_delete=models.SET_NULL,blank=True,null=True)
class RequestedDonation(Donation):#@todo child obj of Donation
	LOCATIONS=[("OUT","Outside location of residence (clearly marked)"),("INF","Inside residence (first floor/garage)"),("INU","Inside residence (upper floor)")]
	Items=models.TextField()
	ItemLocation=models.CharField(max_length=3,choices=LOCATIONS,help_text="Where items are located/should be delivered to")
class TakenDonation(Donation):
	Items=models.TextField()
	DumpFee=models.IntegerField(default=0)
###


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
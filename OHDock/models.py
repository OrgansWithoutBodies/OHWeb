from django.db import models

# Create your models here.



# c.execute('CREATE TABLE IF NOT EXISTS Donations(id INTEGER NOT NULL PRIMARY KEY,donorid INTEGER, timestamp TIMESTAMP)')
#     c.execute('CREATE TABLE IF NOT EXISTS DonationCategories(id INTEGER NOT NULL PRIMARY KEY,name TEXT)')
#     c.execute("CREATE TABLE IF NOT EXISTS CategoryMap(id INTEGER, name TEXT, mapstoid INTEGER )")
#     c.execute('CREATE TABLE IF NOT EXISTS Donors(id INTEGER PRIMARY KEY, Firstname Text,Lastname TEXT, Business TEXT, Phone TEXT,)') 
#     c.execute("""CREATE TABLE IF NOT EXISTS DonationLines(id INTEGER NOT NULL PRIMARY KEY, 
#                                                           donationid INTEGER NOT NULL REFERENCES Donations(id),
#                                                           categoryid INTEGER NOT NULL REFERENCES CategoryMap(id),
#                                                           quantity INTEGER NOT NULL);""") */

class Donor(models.Model):

	Firstname=models.CharField(max_length=25)
	Lastname=models.CharField(max_length=25)
	Phone=models.CharField(max_length=15,blank=True)
	Email=models.EmailField(blank=True)
	Business=models.CharField(blank=True,max_length=30)

class Donation(models.Model):
	Timestamp=models.DateTimeField()



class DonationCategories(models.Model):
	Name=models.CharField(max_length=20)



# class DonationLines(models.Model):
# 	id=models.xField()


# class CategoryMaps(models.Model):
# 	id=models.xField()
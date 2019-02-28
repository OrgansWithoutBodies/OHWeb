from django.contrib import admin
from .models import *

#Model Admins
class DonorAdmin(admin.ModelAdmin):
	list_display=('Firstname','Lastname')


# class Admin(admin.ModelAdmin):
# 	list_display=('sponsorname','sponsortype')
# 	list_filter=('sponsortype',)

#Model Registration - what models are accessible from admin page
# admin.site.register(Event,EventAdmin)
admin.site.register(Donor,DonorAdmin)
admin.site.register(RequestedDonation)
admin.site.register(Trip)
admin.site.register(Stop)
admin.site.register(Employee)
admin.site.register(Truck)
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
admin.site.register(Donation)
admin.site.register(DonationCategory)
# admin.site.register(Sponsor,SponsorAdmin)
# admin.site.register(Pickup)
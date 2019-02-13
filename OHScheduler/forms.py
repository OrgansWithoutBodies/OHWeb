from django import forms

from .models import *

class OfftimeForm(forms.Form):
		#year make model next to each other w default values 
	employeename=forms.CharField()
	requestedtime=forms.DateTimeField()
	requestreason=forms.CharField()

class DonorForm(forms.ModelForm):
	class Meta:
		model=Donor
		fields='__all__'
		


class ContactForm(forms.Form):
	name=forms.CharField()
	email=forms.EmailField()
	phone=forms.IntegerField()
	message=forms.CharField()
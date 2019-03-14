from rest_framework import serializers, viewsets, routers
from django.contrib.auth.models import User, Group
from .models import *
    
class PunchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Punch
        fields = '__all__'
class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminAction
        fields = '__all__'
class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    Firstname=serializers.CharField()
    Lastname=serializers.CharField()
    class Meta:
        model = Employee
        fields = '__all__'

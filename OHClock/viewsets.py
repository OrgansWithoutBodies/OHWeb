from rest_framework import serializers, viewsets, routers
from .serializers import * 

class AdminViewSet(viewsets.ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
class PunchViewSet(viewsets.ModelViewSet):
    queryset = Punch.objects.all()
    serializer_class = PunchSerializer
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
class ActionViewSet(viewsets.ModelViewSet):
    queryset = AdminAction.objects.all()
    serializer_class = ActionSerializer
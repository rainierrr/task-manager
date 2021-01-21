from django.shortcuts import render

# Create your views here.
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from django.contrib.auth.models import User
from .models import Task
from rest_framework import viewsets
from .serializers import TaskSirializer, UserSirializer
from .ownpermissions import ProfilePermissions
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSirializer
    permission_classes = (ProfilePermissions,)

class ManageUserView(generics.RetrieveAPIView):
    serializer_class = UserSirializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSirializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
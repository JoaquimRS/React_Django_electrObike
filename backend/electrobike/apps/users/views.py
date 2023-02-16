from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import (UserSerializer, LoginSerializer, RegisterSerializer)
from .models import User
from electrobike.apps.core.permissions import (IsAuthUser, IsAdmin)

class User(viewsets.GenericViewSet):
    def get_permissions(self):
        if self.request.method in ('POST','PUT','DELETE'):
            self.permission_classes = [IsAuthUser, IsAdmin]
        else:
            self.permission_classes = [IsAuthUser]
        return super(User, self).get_permissions()
    def getUsers(self,request):
        return Response(UserSerializer.getUsers(), status=status.HTTP_200_OK)
    def addUser(self,request):
        return Response(UserSerializer.addUser(request.data), status=status.HTTP_201_CREATED)
    def deleteUser(self, request, idUser):
        return Response(UserSerializer.deleteUser(idUser), status=status.HTTP_200_OK)
    def updateUser(self, request, idUser):
        return Response(UserSerializer.updateUser(request.data, idUser), status=status.HTTP_200_OK)

class AuthUser(viewsets.GenericViewSet):
    def login(self, request):
        return LoginSerializer.login(request.data)
    def register(self, request):
        return RegisterSerializer.register(request.data)
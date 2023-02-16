from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import (LoginSerializer,RegisterSerializer)

class Auth(viewsets.GenericViewSet):
    def login(self, request):
        return LoginSerializer.login(request.data)
    def register(self, request):
        return RegisterSerializer.register(request.data)
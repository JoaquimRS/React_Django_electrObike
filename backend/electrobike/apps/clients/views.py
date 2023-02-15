from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import ClientSerializer
from electrobike.apps.core.permissions import (IsAuthClient)

class Client(viewsets.GenericViewSet):
    permission_classes = (IsAuthClient,)
    def getProfile(self, request):
        return Response(ClientSerializer.getProfile(request.user.email), status=status.HTTP_200_OK)

    def updateProfile(self, request):
        return Response(ClientSerializer.updateProfile(request.user.email, request.data), status=status.HTTP_200_OK)
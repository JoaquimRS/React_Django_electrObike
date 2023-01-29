from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import StationSerializer
from .models import Station
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

class Station(viewsets.GenericViewSet):
    def getStations(self,request):
        serializer = StationSerializer.getStations()
        return Response(serializer,status=status.HTTP_200_OK)
    def addStation(self, request):
        response = StationSerializer.addStation(request.data)
        if response:
            return Response(data=response, status=status.HTTP_201_CREATED)
        else:
            return Response(data="No se ha podido crear la estacion", status=status.HTTP_501_NOT_IMPLEMENTED)
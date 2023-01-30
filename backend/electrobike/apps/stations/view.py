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
        return Response(data=response, status=status.HTTP_201_CREATED)
    def deleteStation(self, request, idStation):
        response = StationSerializer.deleteStation(idStation)
        return Response(data=response, status=status.HTTP_200_OK)
    def updateStation(self, request, idStation):
        response = StationSerializer.updateStation(idStation, request.data)
        return Response(data=response, status=status.HTTP_200_OK)

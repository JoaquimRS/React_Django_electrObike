from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import StationSerializer
from .models import Station
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

class Station(viewsets.GenericViewSet):
    def getStations(self,request):
        return Response(StationSerializer.getStations(),status=status.HTTP_200_OK)
    def addStation(self, request):
        return Response(StationSerializer.addStation(request.data), status=status.HTTP_201_CREATED)
    def deleteStation(self, request, idStation):
        return Response(StationSerializer.deleteStation(idStation), status=status.HTTP_200_OK)
    def updateStation(self, request, idStation):
        return Response(StationSerializer.updateStation(idStation, request.data), status=status.HTTP_200_OK)

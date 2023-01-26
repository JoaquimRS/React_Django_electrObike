from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import StationSerializer
from .models import Station
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

class Station(viewsets.GenericViewSet):
    serializer_class = StationSerializer
    def getStations(self,request):
        serializer = StationSerializer.getStations()
        return Response(serializer,status=status.HTTP_200_OK)
    def addStation(self, request):
        newStation = request.data
        serializer = self.serializer_class(
            data= newStation
        )
        serializer.is_valid(raise_exception=True)
        return Response(data=newStation, status=status.HTTP_201_CREATED)

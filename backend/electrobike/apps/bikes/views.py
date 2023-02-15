from rest_framework import viewsets,status
from rest_framework.response import Response
from .models import Bike
from .serializers import BikeSerializer
from electrobike.apps.core.permissions import (IsAuthUser, IsManager)

class Bike(viewsets.GenericViewSet):
    def get_permissions(self):
        if self.request.method in ('POST','PUT','DELETE'):
            self.permission_classes = [IsAuthUser, IsManager]
        return super(Bike, self).get_permissions()
    def getBikes(self, request):
        return Response(BikeSerializer.getBikes(), status=status.HTTP_200_OK)
    def addBike(self, request):
        return Response(BikeSerializer.addBike(request.data), status=status.HTTP_201_CREATED)
    def deleteBike(self, request, idBike):
        return Response(BikeSerializer.deleteBike(idBike), status=status.HTTP_200_OK)
    def updateBike(self, request, idBike):
        return Response(BikeSerializer.updateBike(idBike, request.data), status=status.HTTP_200_OK)
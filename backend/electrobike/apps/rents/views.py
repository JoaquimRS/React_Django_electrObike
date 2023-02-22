from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import RentSerializer
from electrobike.apps.core.permissions import (IsAuthClient, IsAuthUser, IsManager)

class Rent(viewsets.GenericViewSet):
    permission_classes = (IsAuthClient,)
    def reserveBike(self,request, idBike):
        return Response(RentSerializer.reserveBike(idBike, request.user),status=status.HTTP_200_OK)
    def rentBike(self, request, bikeSlug):
        return Response(RentSerializer.rentBike(bikeSlug, request.user), status=status.HTTP_200_OK)
    def leaveSlot(self, request, idSlot):
        return Response(RentSerializer.leaveSlot(idSlot, request.user), status=status.HTTP_200_OK)
    def leaveBike(self, request, bikeSlug):
        return Response(RentSerializer.leaveBike(bikeSlug, request.user), status=status.HTTP_200_OK)
    
class AdminRent(viewsets.GenericViewSet):
    permission_classes = (IsAuthUser, IsManager)
    def getRents(self, request):
        return Response(RentSerializer.getRents(), status=status.HTTP_200_OK)
    def deleteRent(self, request, idRent):
        return Response(RentSerializer.deleteRent(idRent), status=status.HTTP_200_OK)
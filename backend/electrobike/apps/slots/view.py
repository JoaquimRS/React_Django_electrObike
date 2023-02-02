from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import SlotSerializer
from .models import Slot
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)

class Slot(viewsets.GenericViewSet):
    def getSlots(self,request):
        serializer = SlotSerializer.getSlots()
        return Response(serializer,status=status.HTTP_200_OK)
    def addSlot(self,request):
        response = SlotSerializer.addSlot(request.data)
        return Response(data=response,status=status.HTTP_201_CREATED)
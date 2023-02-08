from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import SlotSerializer
from .models import Slot
from electrobike.apps.core.permissions import IsAuthUser

class Slot(viewsets.GenericViewSet):
    def get_permissions(self):
        if self.request.method in ('POST','DELETE'):
            self.permission_classes = [IsAuthUser]
        return super(Slot,self).get_permissions()
    def getSlots(self,request):
        return Response(SlotSerializer.getSlots(),status=status.HTTP_200_OK)
    def addSlot(self,request):
        return Response(SlotSerializer.addSlot(request.data),status=status.HTTP_201_CREATED)
    def deleteSlot(self,request,idSlot):
        return Response(SlotSerializer.deleteSlot(idSlot), status=status.HTTP_200_OK)
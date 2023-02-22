from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import NotificationSerializer
from electrobike.apps.core.permissions import (IsAuthUser, IsManager)

class Notification(viewsets.GenericViewSet):
    def get_permissions(self):
        if self.request.method in ('POST','PUT','DELETE'):
            self.permission_classes = [IsAuthUser, IsManager]
        return super(Notification, self).get_permissions()
    def getNotifications(self,request):
        return Response(NotificationSerializer.getNotifications(), status=status.HTTP_200_OK)
    def addNotification(self,request):
        return Response(NotificationSerializer.addNotification(request.data), status=status.HTTP_201_CREATED)
    def deleteNotification(self,request, idNotification):
        return Response(NotificationSerializer.deleteNotification(idNotification), status=status.HTTP_200_OK)
from rest_framework import viewsets,status
from rest_framework.response import Response
# Faltan los serializers
from .serializer import IncidentSerializer
from .models import Incident
from electrobike.apps.core.permissions import (IsAuthUser, IsManager)


class Incident(viewsets.GenericViewSet):
    # def get_permissions(self):
    #     if self.request.method in ('POST','PUT','DELETE'):
    #         self.permission_classes = [IsAuthUser, IsManager]
    #     else:
    #         self.permission_classes = [IsAuthUser]
    #     return super(Incident, self).get_permissions()
    def getIncidents(self,request):
        # return Response(data=True, status=status.HTTP_200_OK)
        return Response(IncidentSerializer.getIncidents(), status=status.HTTP_200_OK)
    def addIncident(self,request):
        return Response(data=True, status=status.HTTP_201_CREATED)
        # return Response(IncidentSerializer.addIncident(request.data), status=status.HTTP_201_CREATED)
    def deleteIncident(self, request, id_incident):
        return Response(data=True, status=status.HTTP_200_OK)
        # return Response(IncidentSerializer.deleteIncident(id_incident), status=status.HTTP_200_OK)
    def updateIncident(self, request, id_incident):
        return Response(data=True, status=status.HTTP_200_OK)
        # return Response(IncidentSerializer.updateIncident(request.data, id_incident), status=status.HTTP_200_OK)

class IncidentClient(viewsets.GenericViewSet):
    def newIncident(self, request):
        return Response(data=True, status=status.HTTP_201_CREATED)
        # return Response(IncidentSerializer.newIncident(request.data), status=status.HTTP_201_CREATED
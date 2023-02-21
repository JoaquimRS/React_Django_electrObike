from rest_framework import serializers
from .models import Incident
from django.utils.text import slugify
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from rest_framework import exceptions


class IncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = ('id_incident', 'id_client', 'type', 'id_type', 'description', 'state')
    def getIncidents():
        incidents = Incident.objects.all()
        return incidents
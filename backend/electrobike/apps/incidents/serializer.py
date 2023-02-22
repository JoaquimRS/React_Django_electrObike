from rest_framework import serializers
from .models import Incident
from django.utils.text import slugify
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from rest_framework import exceptions
from electrobike.apps.bikes.models import Bike
from electrobike.apps.stations.models import Station
from electrobike.apps.slots.models import Slot

class IncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = ('id_client', 'type', 'id_type', 'description', 'state')
    def getIncidents():
        queryset = Incident.objects.all()
        return [IncidentDictionary.to_incident(insident) for insident in queryset]
    def addIncident(data):
        serializer = IncidentSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        return IncidentDictionary.to_incident(serializer.save())
    def deleteIncident(idIncident):
        try:
            incident = Incident.objects.get(id_incident=idIncident)
            incident.delete()
            return {'msg':"Incident borrado correctamente"}
        except Incident.DoesNotExist:
            msg = 'Incident no existe.'
            raise exceptions.NotFound(msg)
    def updateIncident(data, idIncident):
        try:
            # Check if idIncident exists
            Incident.objects.get(id_incident=idIncident)
            print()
            # Validate incident
            IncidentSerializer(data=data).is_valid(raise_exception=True)
            # Update the incident
            Incident.objects.filter(id_incident=idIncident).update(**data)
            # Find the final Incident and return
            incident = Incident.objects.get(id_incident=idIncident)
            return IncidentDictionary.to_incident(incident)
        except Incident.DoesNotExist:
            msg = 'Incident no existe.'
            raise exceptions.NotFound(msg)
    def newIncident(data, idClient):
        
        if data['type'] == 'bike':
            try:
                Bike.objects.get(id_bike=data['id_type'])
            except Bike.DoesNotExist:
                msg = 'El objeto no existe en la tabla de bicicletas.' 
                raise exceptions.NotFound(msg)
        if data['type'] == 'station':
            try:
                Station.objects.get(id_station=data['id_type'])
            except Station.DoesNotExist:
                msg = 'El objeto no existe en la tabla de estaciones.' 
                raise exceptions.NotFound(msg)
        if data['type'] == 'slot':
            try:
                Slot.objects.get(id_slot=data['id_type'])
            except Slot.DoesNotExist:
                msg = 'El objeto no existe en la tabla de slots.' 
                raise exceptions.NotFound(msg)
            
        data["id_client"] = idClient
        serializer = IncidentSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        return IncidentDictionary.to_incident(serializer.save())
            
class IncidentDictionary(serializers.ModelSerializer):
    def to_incident(instance):
        return {
            'id_incident': instance.id_incident,
            'id_client': instance.id_client_id,
            'type': instance.type,
            'id_type': instance.id_type,
            'description': instance.description,
            'state': instance.state,
        }
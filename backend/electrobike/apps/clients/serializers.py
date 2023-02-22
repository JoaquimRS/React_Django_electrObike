from rest_framework import serializers, exceptions
from .models import Client
from electrobike.apps.notifications.models import Notification
from electrobike.apps.slots.models import Slot
from electrobike.apps.slots.serializers import SlotDictionary
from electrobike.apps.stations.models import Station
from electrobike.apps.stations.serializers import StationDictionary
from electrobike.apps.bikes.models import Bike
from electrobike.apps.bikes.serializers import BikeDictionary

from django.db.models import Q
from django.utils import timezone
import argon2

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('name','phone','password','avatar')
    def getProfile(client_email):
        try:
            return ClientDictionary.to_client(Client.objects.get(email=client_email))
        except Client.DoesNotExist:
            msg = 'Client no existe.'
            raise exceptions.NotFound(msg)
    def updateProfile(client_email, modClient):
        try:
            # Check if Client_email exists
            oldClient = Client.objects.get(email=client_email)
             # Check if password is present in modClient
            if 'password' in modClient:
                modClient['password'] = argon2.PasswordHasher().hash(modClient['password'])
            # Validate Client
            ClientSerializer(data=modClient, partial=True).is_valid(raise_exception=True)
            # Update the Client
            Client.objects.filter(email=client_email).update(**modClient)
            # Find the final Client and return
            client = Client.objects.get(email=client_email)
            return {'msg':"Cliente modificado correctamente",'client':ClientDictionary.to_client(client)}

        except Client.DoesNotExist:
            msg = 'Client no existe.'
            raise exceptions.NotFound(msg)
    
class ClientDictionary(serializers.ModelSerializer):
    def to_rent(instance):
        return {
            'id_rent': instance.id_rent,
            'client_id': instance.client_id,
            'bike_id': instance.bike_id,
            'bike_plate': instance.bike.bike_plate,
            'status': instance.status,
            'get_slot_id': instance.get_slot_id,
            'get_station_name':instance.get_slot.station.name if instance.get_slot else None,
            'leave_slot_id': instance.leave_slot_id,
            'leave_station_name': instance.leave_slot.station.name if instance.leave_slot else None,
            'get_at': instance.get_at,
            'leave_at': instance.leave_at,
            'kms': instance.kms,
        }
    def to_incident(instance):
        newData ={
            'id_incident': instance.id_incident,
            'id_client': instance.id_client_id,
            'type': instance.type,
            'id_type': instance.id_type,
            'description': instance.description,
            'state': instance.state,
        }
        if instance.type == 'bike':
            newData['object'] = BikeDictionary.to_bike(Bike.objects.get(id_bike=instance.id_type))
        if instance.type == 'slot':
            newData['object'] =  SlotDictionary.to_slots(Slot.objects.get(id_slot=instance.id_type))
        if instance.type == 'station':
            newData['object'] =  StationDictionary.to_stations(Station.objects.get(id_station=instance.id_type))
        return newData
    def to_notification(instance):
        return {
            'id_notification': instance.id_notification,
            'client_id': instance.client_id,
            'expiration': instance.expiration,
            'img': instance.img,
            'title': instance.title,
            'description': instance.description
        }
    def to_client(instance):
        return {
            'id_client': instance.id_client,
            'name': instance.name,
            'email': instance.email,
            'phone': instance.phone,
            'avatar': instance.avatar,
            'incidents': [ClientDictionary.to_incident(incident) for incident in instance.incident_set.all()],
            'rents': [ClientDictionary.to_rent(rent) for rent in instance.rent_set.all()],
            'has_rent': any(rent.status != "4" for rent in instance.rent_set.all()),
            'notifications': [ClientDictionary.to_notification(notification) for notification in Notification.objects.filter(Q(client_id=instance.id_client) | Q(client_id=None)).exclude(expiration__lte=timezone.now()).order_by('-expiration')]
            
        }
from rest_framework import serializers, exceptions
from .models import Client
from electrobike.apps.notifications.models import Notification
from electrobike.apps.slots.models import Slot
from electrobike.apps.stations.models import Station
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
    def to_station(instance):
        return instance.name 
    def to_slot(instance): 
        if instance == None:
            return None
        return ClientDictionary.to_station(Station.objects.filter(id_station = instance.station_id).first())
    def to_rent(instance):
        return {
            'id_rent': instance.id_rent,
            'client_id': instance.client_id,
            'bike_id': instance.bike_id,
            'bike_plate': instance.bike.bike_plate,
            'status': instance.status,
            'get_slot_id': instance.get_slot_id,
            'get_station_name': ClientDictionary.to_slot(Slot.objects.filter(id_slot = instance.get_slot_id).first()),
            'leave_slot_id': instance.leave_slot_id,
            'leave_station_name': ClientDictionary.to_slot(Slot.objects.filter(id_slot = instance.leave_slot_id).first()),
            'get_at': instance.get_at,
            'leave_at': instance.leave_at,
            'kms': instance.kms,
        }
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
            'rents': [ClientDictionary.to_rent(rent) for rent in instance.rent_set.all()],
            'has_rent': any(rent.status != "4" for rent in instance.rent_set.all()),
            'notifications': [ClientDictionary.to_notification(notification) for notification in Notification.objects.filter(Q(client_id=instance.id_client) | Q(client_id=None)).exclude(expiration__lte=timezone.now()).order_by('-expiration')]
            
        }
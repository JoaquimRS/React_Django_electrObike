from rest_framework import serializers
from electrobike.apps.clients.models import Client
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from electrobike.apps.notifications.models import Notification
from django.db.models import Q
from django.utils import timezone
import argon2

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('email','password')
    def login(infoClient):
        try:
            client = Client.objects.get(email=infoClient['email'])
            argon2.PasswordHasher().verify(client.password, infoClient['password'])
            return AuthDictionary.to_client(client,status=status.HTTP_202_ACCEPTED)
        except Exception as e:
            return Response({'detail':"El usuario o la contraseña son incorrectos"},status=status.HTTP_401_UNAUTHORIZED)

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('name','email','password','phone')
    def register(infoClient):
        try:
            infoClient['password'] = argon2.PasswordHasher().hash(infoClient['password'])
            serializer = RegisterSerializer(data=infoClient)
            serializer.is_valid(raise_exception=True)
            return AuthDictionary.to_client(serializer.save(),status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'detail':"Error al crear el usuario"}, status=status.HTTP_400_BAD_REQUEST)
        


class AuthDictionary(serializers.ModelSerializer):
    def to_rent(instance):
        return {
            'id_rent': instance.id_rent,
            'client_id': instance.client_id,
            'bike_id': instance.bike_id,
            'bike_plate': instance.bike.bike_plate,
            'status': instance.status,
            'get_slot_id': instance.get_slot_id,
            'get_station_name': instance.get_slot.station.name,
            'leave_slot_id': instance.leave_slot_id,
            'leave_station_name': instance.leave_slot.station.name,
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
    def to_client(instance,status):
        return Response({
            'client': {
                'id_client': instance.id_client,
                'name': instance.name,
                'email': instance.email,
                'phone': instance.phone,
                'avatar': instance.avatar,
                'rents': [AuthDictionary.to_rent(rent) for rent in instance.rent_set.all()],
                'has_rent': any(rent.status != "4" for rent in instance.rent_set.all()),
                'notifications': [AuthDictionary.to_notification(notification) for notification in Notification.objects.filter(Q(client_id=instance.id_client) | Q(client_id=None)).exclude(expiration__lte=timezone.now())]
            },
            'token': instance.token,
            'refresh_token': instance.refresh_token,
        }, status=status)

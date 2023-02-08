from rest_framework import serializers
from electrobike.apps.clients.models import Client
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
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
            return Response({'error':"El usuario o la contraseña son incorrectos"},status=status.HTTP_401_UNAUTHORIZED)

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
            return Response({'error':"Error al crear el usuario"}, status=status.HTTP_400_BAD_REQUEST)
        


class AuthDictionary(serializers.ModelSerializer):
    def to_client(instance,status):
        return Response({
            'client': {
                'id_client': instance.id_client,
                'name': instance.name,
                'email': instance.email,
                'phone': instance.phone,
                'avatar': instance.avatar,
            },
            'token': instance.token,
            'refresh_token': instance.refresh_token
        }, status=status)

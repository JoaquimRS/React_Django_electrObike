from rest_framework import serializers, exceptions
from .models import Client
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
    def to_client(instance):
        return {
            'id_client': instance.id_client,
            'name': instance.name,
            'email': instance.email,
            'phone': instance.phone,
            'avatar': instance.avatar
        }
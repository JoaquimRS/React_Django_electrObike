from rest_framework import serializers
from .models import Rent
from rest_framework import exceptions
from electrobike.apps.slots.models import Slot
from electrobike.apps.bikes.models import Bike
from electrobike.apps.bikes.serializers import BikeDictionary
from electrobike.apps.notifications.models import Notification
from electrobike.apps.core.exceptions import NotAllowedToRent
from django.db.models import Q
from datetime import datetime, timedelta
from electrobike.apps.core.utils import get_distance_between

class RentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rent
        fiels = '__all__'
    def reserveBike(idBike, client):
        try:
            # Check if bike exists
            bike = Bike.objects.get(id_bike = idBike)
            
            # Check if bike has Slot
            if not getattr(bike, 'slot', None):
                raise exceptions.NotFound('Esa bici no se encuentra en ningun Slot')
            
            # Check if the client has any bike active
            if Rent.objects.exclude(status='4').filter(client_id=client.id_client):
                raise NotAllowedToRent("Ya estas rentando una bici")
            
            # Check if the bike is been used
            if Rent.objects.exclude(status='4').filter(bike_id=bike.id_bike):
                raise NotAllowedToRent("Esta bici esta reservada por otro cliente")

            newRent = {
                'bike_id': bike.id_bike,
                'client_id': client.id_client,
                'status': 1,
                'get_slot_id': bike.slot.id_slot
            }

            # Send Notification
            reserve_notification = {
                'client_id': client.id_client,
                'expiration': datetime.now() + timedelta(minutes=5),
                'img': "/reserve_bike.png",
                'title': "Alquiler de Bicicleta",
                'description': "Acabas de reservar una bicicleta, si no la coges en 5 minutos dejara de estar reservada."
            }
            Notification.objects.create(**reserve_notification)
            return RentDictionary.to_rent(Rent.objects.create(**newRent))
        except Bike.DoesNotExist:
            raise exceptions.NotFound('Bici no existe')
    def rentBike(bikeSlug, client):
        try:
            # Check if bike exists
            bike = Bike.objects.get(slug = bikeSlug)
            
            # Check if bike has Slot
            if not getattr(bike, 'slot', None):
                raise exceptions.NotFound('Esa bici no se encuentra en ningun Slot')
            
            # Check if the client has any bike active
            if Rent.objects.exclude((Q(status='4') | Q(status='1'))).filter(client_id=client.id_client):
                raise NotAllowedToRent("Ya has reservado una bici")
            
            # Check if bike and client exists and have the status 1
            rent = Rent.objects.filter(client_id=client.id_client, bike_id=bike.id_bike, status='1').first()
            if not rent:
                raise NotAllowedToRent("Esa no es la bicicleta que has reservado")
            
            # Modify Rent
            rent.get_at = datetime.now()
            rent.status = 2
            rent.save()

            # Delete Bike from it Slot
            slot = Slot.objects.get(id_slot=bike.slot.id_slot)
            slot.bike_id = None
            slot.save()

            return RentDictionary.to_rent(rent)
        except Bike.DoesNotExist:
            raise exceptions.NotFound('Bici no existe')
    def leaveSlot(idSlot, client):
        try:
            # Check if Slot exists
            slot = Slot.objects.get(id_slot=idSlot)

            # Check if Slot is Free
            if not slot.bike is None:
                raise NotAllowedToRent("El Slot esta ocupado")
            
            # Check if Client has any bike active
            if Rent.objects.exclude((Q(status='4') | Q(status='2'))).filter(client_id=client.id_client):
                raise NotAllowedToRent("No estas usando una bici")

            # Check if Client has been using any bike
            rent = Rent.objects.filter(client_id=client.id_client, status=2).first()
            if not rent:
                raise NotAllowedToRent("No tienes una bicicleta en uso")
            
            # Modify Rent
            rent.leave_slot_id = slot.id_slot
            rent.status = 3
            rent.save()

            return RentDictionary.to_rent(rent)
        except Slot.DoesNotExist:
            raise exceptions.NotFound('Slot no existe')
    
    def leaveBike(bikeSlug, client):
        try:
            # Check if bike exists
            bike = Bike.objects.get(slug = bikeSlug)

            # Check if bikeSlug is the same as UserBike

            # Check if Client has any bike active
            if Rent.objects.exclude((Q(status='4') | Q(status='3'))).filter(client_id=client.id_client):
                    raise NotAllowedToRent("No has reservado un slot")

            # Check if Client has been using a Bike and Reserved Slot
            rent = Rent.objects.filter(client_id=client.id_client, status=3, bike_id=bike.id_bike).first()
            if not rent:
                raise NotAllowedToRent("Esta no es tu Bici")
            
            # Modify Rent
            rent.leave_at = datetime.now()
            rent.status = 4
            rent.kms = get_distance_between(rent.get_slot.station.lat,rent.get_slot.station.long,rent.leave_slot.station.lat,rent.leave_slot.station.long)
            rent.save()

            # Add Bike from it Slot
            slot = Slot.objects.get(id_slot=rent.leave_slot_id)
            slot.bike_id = rent.bike_id
            slot.save()
            # Send Notification
            leave_notification = {
                'client_id': client.id_client,
                'expiration': datetime.now() + timedelta(minutes=5),
                'img': "/leave_bike.png",
                'title': "Fin uso Bicicleta",
                'description': "Gracias por usar nuestros servicios."
            }
            Notification.objects.create(**leave_notification)
            return RentDictionary.to_rent(rent)
        except Bike.DoesNotExist:
            raise exceptions.NotFound('Bike no existe')
        
  
class RentDictionary(serializers.ModelSerializer):
    def to_rent(instance):
        return {
            'id_rent': instance.id_rent,
            'bike_id': instance.bike_id,
            'status': instance.status,
            'get_slot_id': instance.get_slot_id,
            'leave_slot_id': instance.leave_slot_id,
            'get_at': instance.get_at,
            'leave_at': instance.leave_at,
            'kms': instance.kms,
            'client_id': instance.client_id
        }
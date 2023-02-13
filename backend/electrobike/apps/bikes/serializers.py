from rest_framework import serializers
from .models import Bike
from rest_framework import exceptions
from electrobike.apps.core.utils import generate_random_string
from django.utils.text import slugify

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = ('bike_plate',)
    def getBikes():
        queryset = Bike.objects.all()
        return [BikeDictionary.to_bike(bike) for bike in queryset]
    def addBike(infoBike):
        serializer = BikeSerializer(data=infoBike)
        serializer.is_valid(raise_exception=True)
        return {'msg':"Bike creada correctamente",'bike':BikeDictionary.to_bike(serializer.save())}
    def deleteBike(idBike):
        try:
            bike = Bike.objects.get(id_bike=idBike)
            bike.delete()
            return {'msg':'Bike borrada correctamente'}
        except Bike.DoesNotExist:
            msg = 'Bike no existe.'
            raise exceptions.NotFound(msg)
    def updateBike(idBike, modBike):
        try:
            # Check if idBike exists
            Bike.objects.get(id_bike=idBike)
            #Validate bike
            BikeSerializer(data=modBike).is_valid(raise_exception=True)
            # Create Slug from Bike_Plate
            modBike['slug'] = slugify(str(modBike['bike_plate'])) + "|" + generate_random_string(size=10)
            # Update the bike
            Bike.objects.filter(id_bike=idBike).update(**modBike)
            # Find the final Bike and return
            bike = Bike.objects.get(id_bike=idBike)
            return {'msg':"Bike modificada correctamente",'bike':BikeDictionary.to_bike(bike)}
        except Bike.DoesNotExist:
            msg = 'Bike no existe.'
            raise exceptions.NotFound(msg)
        

class BikeDictionary(serializers.ModelSerializer):
    def to_bike(instance):
        return {
            'id_bike': instance.id_bike,
            'slug': instance.slug,
            'bike_plate': instance.bike_plate
        } 

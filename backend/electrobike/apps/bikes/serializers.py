from rest_framework import serializers
from .models import Bike



class BikeDictionary(serializers.ModelSerializer):
    def to_bike(instance):
        return {
            'id_bike': instance.id_bike,
            'slug': instance.slug,
            'bike_plate': instance.bike_plate
        } 

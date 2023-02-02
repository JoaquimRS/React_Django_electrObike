from rest_framework import serializers
from .models import Station
from django.utils.text import slugify
from electrobike.apps.bikes.serializers import BikeDictionary

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ('name','lat','long','img')
    def getStations():
        queryset = Station.objects.all()
        serialized_stations = [StationDictionary.to_stations(station) for station in queryset]
        return serialized_stations
    def addStation(newStation):
        serializer = StationSerializer(
            data=newStation
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return newStation
    def deleteStation(idStation):
        station = Station.objects.get(id_station=idStation)
        return station.delete()
    def updateStation(idStation, modStation):
        response =  Station.objects.filter(id_station=idStation).update(
            slug = slugify(modStation['name']),
            name = modStation['name'],
            lat = modStation['lat'],
            long = modStation['long'],
            img = modStation['img']
        )
        return response

class StationDictionary(serializers.ModelSerializer):
    def to_slots(instance):
        return {
            'id_slot': instance.id_slot,
            'slug': instance.slug,
            'bike_id': instance.bike_id,
            'bike': BikeDictionary.to_bike(instance.bike)
        }
    def to_stations(instance):
        return {
            'id_station': instance.id_station,
            'slug': instance.slug,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img,
            'slots': [StationDictionary.to_slots(slot) for slot in instance.slot_set.all()]
        }
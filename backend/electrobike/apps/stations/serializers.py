from rest_framework import serializers
from .models import Station
from django.utils.text import slugify
from electrobike.apps.bikes.serializers import BikeDictionary
from django.db.models import Max
from rest_framework import exceptions

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ('name','lat','long','img')
    def getLastNumber():
        return Station.objects.aggregate(Max('number'))['number__max']
    def getStations():
        queryset = Station.objects.all().order_by('number')
        return [StationDictionary.to_stations(station) for station in queryset]
    def addStation(newStation):
        serializer = StationSerializer(data=newStation)
        serializer.is_valid(raise_exception=True)
        return {'msg':"Station creada correctamente",'station':StationDictionary.to_stations(serializer.save())}
        
    def deleteStation(idStation):
        try:
            station = Station.objects.get(id_station=idStation)
            station.delete()
            return {'msg':"Station borrada correctamente"}
        except Station.DoesNotExist:
            msg = 'Station no existe.'
            raise exceptions.NotFound(msg)
    def updateStation(idStation, modStation):
        try:
            # Check if idStation exists
            Station.objects.get(id_station=idStation)
            # Validate station
            StationSerializer(data=modStation).is_valid(raise_exception=True)
            # Create Slug from Name
            modStation['slug'] = slugify(modStation['name'])
            # Update the station
            Station.objects.filter(id_station=idStation).update(**modStation)
            # Find the final Station and return
            station = Station.objects.get(id_station=idStation)
            return {'msg':"Station modificada correctamente",'station':StationDictionary.to_stations(station)}
        except Station.DoesNotExist:
            msg = 'Station no existe.'
            raise exceptions.NotFound(msg)
class StationDictionary(serializers.ModelSerializer):
    def to_slots(instance):
        data = {
            'id_slot': instance.id_slot,
            'number': instance.number,
            'bike_id': instance.bike_id,
        }
        if instance.bike_id is not None:
            data['bike'] = BikeDictionary.to_bike(instance.bike)
        return data
    def to_stations(instance):
        return {
            'id_station': instance.id_station,
            'slug': instance.slug,
            'number': instance.number,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img,
            'slots': [StationDictionary.to_slots(slot) for slot in instance.slot_set.all()]
        }
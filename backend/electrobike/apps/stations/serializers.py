<<<<<<< HEAD
from rest_framework import serializers
from .models import Station
from django.utils.text import slugify

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ('name','lat','long','img')
    def to_stations(instance):
        return {
            'id_station': instance.id_station,
            'slug': instance.slug,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img
        }
    def getStations():
        queryset = Station.objects.all()
        serialized_stations = []
        for station in queryset.iterator():
            set_station = StationSerializer.to_stations(station)
            serialized_stations.append(set_station)
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
=======
from rest_framework import serializers
from .models import Station

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ('name','lat','long','img')
    def to_stations(instance):
        return {
            'id_station': instance.id_station,
            'slug': instance.slug,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img
        }
    def getStations():
        queryset = Station.objects.all()
        serialized_stations = []
        for station in queryset.iterator():
            set_station = StationSerializer.to_stations(station)
            serialized_stations.append(set_station)
        return serialized_stations
    def addStation(newStation):
        serializer = StationSerializer(
            data=newStation
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return newStation
        
>>>>>>> vite

from rest_framework import serializers
from .models import Station

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ('id_station','name','lat','long','img')
    def to_stations(instance):
        return {
            'id_station': instance.id_station,
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
        
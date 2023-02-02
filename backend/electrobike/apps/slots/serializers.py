from rest_framework import serializers
from .models import Slot
from electrobike.apps.bikes.serializers import BikeDictionary

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slot
        fields = ('station','bike')
    def getSlots():
        queryset = Slot.objects.all()
        serialized_stations = [SlotDictionary.to_slots(station) for station in queryset]
        return serialized_stations
    def addSlot(newSlot):
        serializer = SlotSerializer(
            data=newSlot
        )
        if serializer.is_valid(raise_exception=True):
            return "A"

        return "A"

class SlotDictionary(serializers.ModelSerializer):
    def to_slots(instance):
        return {
            'id_slot': instance.id_slot,
            'slug': instance.slug,
            'station_id': instance.station_id,
            'bike_id': instance.bike_id,
            'bike': BikeDictionary.to_bike(instance.bike),
            'station': SlotDictionary.to_station(instance.station)
        }
    def to_station(instance):
        return {
            'id_station': instance.id_station,
            'slug': instance.slug,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img,
        }
from rest_framework import serializers
from .models import Slot
from electrobike.apps.bikes.serializers import BikeDictionary
from django.db.models import Max

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slot
        fields = ('station','bike')
    def getLastNumber(station_id):
        return Slot.objects.filter(station_id=station_id).aggregate(Max('number'))['number__max']
    def getSlots():
        queryset = Slot.objects.all()
        serialized_stations = [SlotDictionary.to_slots(station) for station in queryset]
        return serialized_stations
    def addSlot(newSlot):
        serializer = SlotSerializer(
            data=newSlot
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return newSlot
    def deleteSlot(idSlot):
        slot = Slot.objects.get(id_slot=idSlot)
        return slot.delete()

class SlotDictionary(serializers.ModelSerializer):
    def to_slots(instance):
        data = {
            'id_slot': instance.id_slot,
            'number': instance.number,
            'station_id': instance.station_id,
            'bike_id': instance.bike_id,
            'station': SlotDictionary.to_station(instance.station)
        }
        if instance.bike_id is not None:
            data['bike'] = BikeDictionary.to_bike(instance.bike)
        return data
    def to_station(instance):
        return {
            'id_station': instance.id_station,
            'slug': instance.slug,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img,
        }
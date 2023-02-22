from rest_framework import serializers
from .models import Slot
from electrobike.apps.bikes.serializers import BikeDictionary
from django.db.models import Max
from rest_framework import exceptions

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slot
        fields = ('station','bike')
    def getLastNumber(station_id):
        return Slot.objects.filter(station_id=station_id).aggregate(Max('number'))['number__max']
    def getSlots():
        queryset = Slot.objects.all().order_by('number')
        return [SlotDictionary.to_slots(station) for station in queryset]
    def addSlot(reqSlot):
        newSlot = {
            'station': reqSlot['station_id'],
        }
        newSlot['bike'] = reqSlot['bike_id'] if 'bike_id' in reqSlot else None
        serializer = SlotSerializer(
            data=newSlot
        )
        serializer.is_valid(raise_exception=True)
        return {'msg':"Slot creada correctamente",'slot':SlotDictionary.to_slots(serializer.save())}
    def deleteSlot(idSlot):
        try: 
            slot = Slot.objects.get(id_slot=idSlot)
            slot.delete()
            return {'msg':"Slot borrado correctamente"}
        except Slot.DoesNotExist:
            msg = 'Slot no existe.'
            raise exceptions.NotFound(msg)
    def updateSlot(idSlot, reqSlot):
        try:
            # Check if idSlot exists
            Slot.objects.get(id_slot=idSlot)
            # Validate Slot
            modSlot = {
                'station': reqSlot['station_id'],
            }
            if 'bike_id' in reqSlot and reqSlot['bike_id']:
                modSlot['bike'] = reqSlot['bike_id']
            else:
                modSlot['bike'] = None
            SlotSerializer(data=modSlot).is_valid(raise_exception=True)
            # Update Slot
            Slot.objects.filter(id_slot=idSlot).update(**modSlot)
            # Find the final Slot and return
            slot = Slot.objects.get(id_slot=idSlot)
            return {'msg':"Slot modificada correctamente", 'slot':SlotDictionary.to_slots(slot)}

        except Slot.DoesNotExist:
            msg = 'Slot no existe.'
            raise exceptions.NotFound(msg)

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
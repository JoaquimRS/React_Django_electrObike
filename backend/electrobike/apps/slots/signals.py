from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Slot
from electrobike.apps.core.utils import generate_random_string
from django.utils.text import slugify
from .serializers import SlotSerializer

@receiver(pre_save, sender=Slot)
def generate_id_and_slug(sender, instance, *args, **kwargs):
    
    if instance and not instance.id_slot:
        instance.id_slot = generate_random_string(size=25)
    if instance and not instance.number:
        last_station_number = instance.station.number
        last_slot_number = SlotSerializer.getLastNumber(instance.station_id)
        if (last_slot_number):
            instance.number = last_slot_number + 1
        else:
            instance.number = last_station_number + 1

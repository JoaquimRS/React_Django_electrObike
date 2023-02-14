from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Station
from electrobike.apps.core.utils import generate_random_string
from django.utils.text import slugify
from .serializers import StationSerializer

@receiver(pre_save, sender=Station)
def generate_id_and_slug(sender, instance, *args, **kwargs):
    
    if instance and not instance.id_station:
        instance.id_station = generate_random_string(size=25)
    if instance and not instance.slug:
        instance.slug = slugify(instance.name)
    if instance and not instance.number:
        instance.number = StationSerializer.getLastNumber()+100 if StationSerializer.getLastNumber() else 100

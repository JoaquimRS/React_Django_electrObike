from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Bike
from electrobike.apps.core.utils import generate_random_string
from django.utils.text import slugify

@receiver(pre_save, sender=Bike)
def generate_id_and_slug(sender, instance, *args, **kwargs):
    if instance and not instance.id_bike:
        instance.id_bike = generate_random_string(size=25)
    if instance and not instance.slug:
        instance.slug = slugify(str(instance.bike_plate)) + "|" + generate_random_string(size=10)
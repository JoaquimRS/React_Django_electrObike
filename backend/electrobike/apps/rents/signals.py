from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Rent
from electrobike.apps.core.utils import generate_random_string

@receiver(pre_save, sender=Rent)
def generate_id(sender, instance, *args, **kwargs):
    if instance and not instance.id_rent:
        instance.id_rent = generate_random_string(size=25)
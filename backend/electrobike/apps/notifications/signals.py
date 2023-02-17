from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Notification
from electrobike.apps.core.utils import generate_random_string

@receiver(pre_save, sender=Notification)
def generate_id(sender, instance, *args, **kwargs):
    if instance and not instance.id_notification:
        instance.id_notification = generate_random_string(size=25)
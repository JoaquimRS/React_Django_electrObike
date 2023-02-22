from django.db.models.signals import pre_save
from django.dispatch import receiver
from electrobike.apps.incidents.models import Incident
from electrobike.apps.core.utils import generate_random_string

@receiver(pre_save, sender=Incident)
def generate_id(sender, instance, *args, **kargs):
    if instance and not instance.id_incident:
        instance.id_incident = generate_random_string(size=24)

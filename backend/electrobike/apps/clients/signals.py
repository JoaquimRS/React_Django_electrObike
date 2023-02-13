from django.db.models.signals import pre_save
from django.dispatch import receiver
from electrobike.apps.clients.models import Client
from electrobike.apps.core.utils import generate_random_string

@receiver(pre_save, sender=Client)
def generate_id_and_avatar(sender, instance, *args, **kargs):
    
    if instance and not instance.id_client:
        instance.id_client = "electrobike|"+generate_random_string(size=24)
    if instance and not instance.avatar:
        instance.avatar = "https://api.dicebear.com/5.x/personas/svg?seed="+instance.name+generate_random_string(size=5)
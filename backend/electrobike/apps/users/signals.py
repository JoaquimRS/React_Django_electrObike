from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import User
from electrobike.apps.core.utils import generate_random_string

@receiver(pre_save, sender=User)
def generate_id_and_avatar(sender, instance, *args, **kargs):
    
    if instance and not instance.id_user:
        instance.id_user = generate_random_string(size=25)
    if instance and not instance.role:
        instance.role = "EMPLOYEE"
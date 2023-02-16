from django.db import models
from electrobike.apps.bikes.models import Bike
from electrobike.apps.clients.models import Client
from electrobike.apps.slots.models import Slot

class Rent(models.Model):
    class Meta:
        db_table = 'rents'
    id_rent = models.CharField(max_length=25, primary_key=True)
    client = models.ForeignKey(Client, on_delete=models.DO_NOTHING)
    bike = models.ForeignKey(Bike, on_delete=models.DO_NOTHING)
    status = models.CharField(max_length=100)
    get_slot = models.ForeignKey(Slot, on_delete=models.DO_NOTHING, related_name='get_slot')
    leave_slot = models.ForeignKey(Slot, on_delete=models.DO_NOTHING, related_name='leave_slot', blank=True, null=True)
    get_at = models.DateTimeField(blank=True, null=True)
    leave_at = models.DateTimeField(blank=True, null=True)
    kms = models.FloatField(blank=True, null=True)
    
    def __str__(self):
        return self.id_rent 
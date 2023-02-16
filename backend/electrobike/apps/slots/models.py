from django.db import models
from electrobike.apps.stations.models import Station
from electrobike.apps.bikes.models import Bike

class Slot(models.Model):
    class Meta:
        db_table = 'slots'
    id_slot = models.CharField(max_length=25, primary_key=True)
    number = models.IntegerField(default=0, unique=True)
    station = models.ForeignKey(Station, on_delete=models.CASCADE)
    bike = models.OneToOneField(Bike, on_delete=models.DO_NOTHING, blank=True, null=True)
    def __str__(self):
        return str(self.number)

from django.db import models
from electrobike.apps.clients.models import Client

class Incident(models.Model):
    class Meta:
        db_table = 'incidents'
    id_incident = models.CharField(max_length=100, primary_key=True)
    id_client = models.ForeignKey(Client, on_delete=models.DO_NOTHING)
    TYPES = (
        ('bike', 'Bike'),
        ('slot', 'Slot'),
        ('station', 'Station'),
    )
    type = models.CharField(choices=TYPES, max_length=100)

    id_type = models.CharField(max_length=25)
    description = models.CharField(max_length=200)
    state = models.CharField(max_length=100)

    def __str__(self):
        return self.id_incident

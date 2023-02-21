from django.db import models
from electrobike.apps.clients.models import Client

class Notification(models.Model):
    class Meta:
        db_table = 'notifications'
    id_notification = models.CharField(max_length=25, primary_key=True)
    client = models.ForeignKey(Client, on_delete=models.DO_NOTHING, blank=True, null=True)
    expiration = models.DateTimeField()
    img = models.TextField(blank=True, null=True, default="/electrObike_icono.png")
    title = models.CharField(max_length=25)
    description = models.TextField()

    def __str__(self):
        return self.title


    
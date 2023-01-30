from django.db import models

class Slot(models.Model):
    class Meta:
        db_table = 'slots'
    id_slot = models.CharField(max_length=25, primary_key=True)
    id_station = models.ForeignKey('stations.Station', on_delete=models.DO_NOTHING)
    def __str__(self):
        return str(self.id_slot)
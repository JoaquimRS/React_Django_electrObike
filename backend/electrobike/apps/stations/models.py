from django.db import models

class Station(models.Model):
    class Meta:
        db_table = 'stations'
    id_station = models.CharField(max_length=25,primary_key=True)
    slug = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    lat = models.DecimalField(max_digits=8, decimal_places=6)
    long = models.DecimalField(max_digits=9, decimal_places=6)
    img = models.TextField()

    def __str__(self):
        return self.name

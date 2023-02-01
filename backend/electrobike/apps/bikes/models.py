from django.db import models

class Bike(models.Model):
    class Meta:
        db_table = 'bikes'
    id_bike = models.CharField(max_length=25, primary_key=True)
    slug = models.CharField(max_length=100, unique=True)
    bike_plate = models.IntegerField(unique=True)

    def __str__(self):
        return self.id_bike
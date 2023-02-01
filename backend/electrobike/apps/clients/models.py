from django.db import models

class Client(models.Model):
    class Meta:
        db_table = 'clients'
    id_client = models.CharField(max_length=25, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    avatar = models.CharField(max_length=100)

    def __str__(self):
        return self.id_client

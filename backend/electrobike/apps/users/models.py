from django.db import models

class User(models.Model):
    class Meta:
        db_table = 'users'
    id_user = models.CharField(max_length=25, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    charge = models.CharField(max_length=100)

    def __str__(self):
        return self.id_user
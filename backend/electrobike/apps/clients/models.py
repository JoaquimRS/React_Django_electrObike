from django.db import models
from datetime import datetime, timedelta
from django.conf import settings
import jwt

class Client(models.Model):
    class Meta:
        db_table = 'clients'
    id_client = models.CharField(max_length=36, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    avatar = models.CharField(max_length=100)

    def __str__(self):
        return self.email
    @property
    def token(self):
        return self.generate_token_jwt()
    
    def generate_token_jwt(self):
        dt = datetime.now() +timedelta(minutes=60)
        token = jwt.encode({
            'email': self.email,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')
        return token.decode('utf-8')

    @property
    def refresh_token(self):
        return self.generate_refresh_token_jwt()
    
    def generate_refresh_token_jwt(self):
        dt = datetime.now() +timedelta(minutes=1440)
        token = jwt.encode({
            'email': self.email,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')
        return token.decode('utf-8')
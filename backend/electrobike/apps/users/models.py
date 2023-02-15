from django.db import models
from datetime import datetime,timedelta
from django.conf import settings
import jwt

class User(models.Model):
    class Meta:
        db_table = 'users'
    id_user = models.CharField(max_length=25, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    ROLE_TYPES = (
        ('ADMIN','ADMIN'),
        ('MANAGER','MANAGER'),
        ('EMPLOYEE','EMPLOYEE')
    )
    role = models.CharField(choices=ROLE_TYPES, max_length=100)

    def __str__(self):
        return self.name

    @property
    def token(self):
        return self.generate_token_jwt()
    
    def generate_token_jwt(self):
        dt = datetime.now() +timedelta(minutes=15)
        token = jwt.encode({
            'email': self.email,
            'role': self.role,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')
        return token.decode('utf-8')

    @property
    def refresh_token(self):
        return self.generate_refresh_token_jwt()
    
    def generate_refresh_token_jwt(self):
        dt = datetime.now() +timedelta(minutes=60)
        token = jwt.encode({
            'email': self.email,
            'role': self.role,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')
        return token.decode('utf-8')
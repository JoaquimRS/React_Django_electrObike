from django.contrib import admin
from .models import Bike

class BikeAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Bike._meta.fields]

admin.site.register(Bike, BikeAdmin)
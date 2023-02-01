from django.contrib import admin
from .models import Rent

class RentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Rent._meta.fields]

admin.site.register(Rent, RentAdmin)

from django.contrib import admin 
from .models import Station

class StationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Station._meta.fields]
    
admin.site.register(Station,StationAdmin)

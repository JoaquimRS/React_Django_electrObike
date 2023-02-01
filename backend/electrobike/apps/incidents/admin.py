from django.contrib import admin
from .models import Incident

class IncidentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Incident._meta.fields]

admin.site.register(Incident, IncidentAdmin)
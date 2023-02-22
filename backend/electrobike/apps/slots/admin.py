from django.contrib import admin
from .models import Slot

class SlotAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Slot._meta.fields]

admin.site.register(Slot, SlotAdmin)
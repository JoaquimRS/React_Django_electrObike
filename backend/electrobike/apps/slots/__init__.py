from django.apps import AppConfig

class SlotsAppConfig(AppConfig):
    name = 'electrobike.apps.slots'
    label = 'slots'
    verbose_name = 'Slots'

    def ready(self):
        import electrobike.apps.slots.signals

default_app_config = 'electrobike.apps.slots.SlotsAppConfig'
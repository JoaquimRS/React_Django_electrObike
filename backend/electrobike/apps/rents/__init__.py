from django.apps import AppConfig


class RentsAppConfig(AppConfig):
    name = 'electrobike.apps.rents'
    label = 'rents'
    verbose_name = 'Rents'
    
    def ready(self):
        import electrobike.apps.rents.signals

default_app_config = 'electrobike.apps.rents.RentsAppConfig'
from django.apps import AppConfig


class BikesAppConfig(AppConfig):
    name = 'electrobike.apps.bikes'
    label = 'bikes'
    verbose_name = 'Bikes'

    def ready(self):
        import electrobike.apps.bikes.signals

default_app_config = 'electrobike.apps.bikes.BikesAppConfig'
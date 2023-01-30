from django.apps import AppConfig


class StationsAppConfig(AppConfig):
    name = 'electrobike.apps.stations'
    label = 'stations'
    verbose_name = 'Stations'
    
    def ready(self):
        import electrobike.apps.stations.signals

default_app_config = 'electrobike.apps.stations.StationsAppConfig'
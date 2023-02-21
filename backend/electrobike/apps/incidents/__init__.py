from django.apps import AppConfig


class IncidentsAppConfig(AppConfig):
    name = 'electrobike.apps.incidents'
    label = 'incidents'
    verbose_name = 'incidents'
    
    def ready(self):
        import electrobike.apps.incidents.signals

default_app_config = 'electrobike.apps.incidents.IncidentsAppConfig'
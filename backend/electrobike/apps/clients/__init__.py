from django.apps import AppConfig


class ClientsAppConfig(AppConfig):
    name = 'electrobike.apps.clients'
    label = 'clients'
    verbose_name = 'Clients'
    
    def ready(self):
        import electrobike.apps.clients.signals

default_app_config = 'electrobike.apps.clients.ClientsAppConfig'
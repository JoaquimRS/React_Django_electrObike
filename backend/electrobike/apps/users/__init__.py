from django.apps import AppConfig


class UsersAppConfig(AppConfig):
    name = 'electrobike.apps.users'
    label = 'users'
    verbose_name = 'Users'

    def ready(self):
        import electrobike.apps.users.signals
    
default_app_config = 'electrobike.apps.users.UsersAppConfig'
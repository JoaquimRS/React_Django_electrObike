from django.apps import AppConfig

class NotificationsAppConfig(AppConfig):
    name = 'electrobike.apps.notifications'
    label = 'notifications'
    verbose_name = 'Notifications'

    def ready(self):
        import electrobike.apps.notifications.signals

default_app_config = 'electrobike.apps.notifications.NotificationsAppConfig'
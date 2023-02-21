from django.urls import path
from .views import Notification

urlpatterns = [
    path('notifications', Notification.as_view({'get':'getNotifications'})),
    path('notifications/create', Notification.as_view({'post':'addNotification'})),
    path('notifications/delete/<idNotification>', Notification.as_view({'delete':'deleteNotification'}))

]

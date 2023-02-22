from rest_framework import serializers
from .models import Notification
from rest_framework import exceptions

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('client','expiration','img','title','description')
    def getNotifications():
        queryset = Notification.objects.all().order_by('-client_id')
        return [NotificationDictionary.to_notifications(notification) for notification in queryset]
    def addNotification(newNotification):
        serializers = NotificationSerializer(data=newNotification)
        serializers.is_valid(raise_exception=True)
        return {'msg':"Notification creada correctamente", 'notification':NotificationDictionary.to_notifications(serializers.save())}
    def deleteNotification(idNotification):
        try:
            notification = Notification.objects.get(id_notification=idNotification)
            notification.delete()
            return {'msg':"Notification borrada correctamente"}
        except Notification.DoesNotExist:
            msg = "Notification no existe."
            raise exceptions.NotFound(msg)

class NotificationDictionary(serializers.ModelSerializer):
    def to_notifications(instance):
        return {
            'id_notification': instance.id_notification,
            'client': instance.client_id,
            'expiration': instance.expiration,
            'img': instance.img,
            'title': instance.title,
            'description': instance.description
        }
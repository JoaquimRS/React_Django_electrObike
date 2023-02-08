from rest_framework import permissions
from electrobike.apps.clients.models import Client
from electrobike.apps.users.models import User

class IsAuthClient(permissions.BasePermission):
    message = 'You are not an auth client'
    def has_permission(self, request, view):
        try:
            return True if Client.objects.get(email=request.user.email) else False
        except Exception as e:
            return False

class IsAuthUser(permissions.BasePermission):
    message = 'You are not an auth user'
    def has_permission(self, request, view):
        try:
            return True if User.objects.get(email=request.user.email) else False
        except Exception as e:
            return False
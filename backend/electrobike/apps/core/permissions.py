from rest_framework import permissions
from electrobike.apps.clients.models import Client
from electrobike.apps.users.models import User

class IsAuthClient(permissions.BasePermission):
    message = 'You are not an auth client'
    def has_permission(self, request, view):
        try:
            return True if Client.objects.get(email=request.Client.email) else False
        except Exception as e:
            return False

class IsAuthUser(permissions.BasePermission):
    message = 'You are not an auth user'
    def has_permission(self, request, view):
        try:
            return True if User.objects.get(email=request.User.email) else False
        except Exception as e:
            return False

class IsAdmin(permissions.BasePermission):
    message = 'You are not an admin'
    def has_permission(self, request, view):
        return True if request.User.role == "ADMIN" else False

class IsManager(permissions.BasePermission):
    message = 'You are not a manager or an admin'
    def has_permission(self, request, view):
        return True if request.User.role in ("ADMIN","MANAGER") else False
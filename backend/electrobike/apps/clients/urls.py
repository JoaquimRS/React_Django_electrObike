from django.urls import path
from .views import Client

urlpatterns = [
    path('profile', Client.as_view({'get':'getProfile'})),
    path('profile/update', Client.as_view({'put':'updateProfile'}))
]

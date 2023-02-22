from django.urls import path
from .views import Client, Clients

urlpatterns = [
    path('profile', Client.as_view({'get':'getProfile'})),
    path('profile/update', Client.as_view({'put':'updateProfile'})),
    path('clients', Clients.as_view({'get':'getClients'})),
    path('clients/delete/<idClient>', Clients.as_view({'delete':'deleteClient'}))
]

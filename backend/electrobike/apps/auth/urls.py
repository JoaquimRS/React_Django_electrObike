from django.urls import path
from .views import Auth

urlpatterns = [
    path('auth/login', Auth.as_view({'post':'login'})),
    path('auth/register', Auth.as_view({'post':'register'}))
]
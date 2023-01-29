from django.urls import path
from .view import Station

urlpatterns = [
    path('stations', Station.as_view(({'get':'getStations'}))),
    path('stations/create', Station.as_view(({'post':'addStation'})))
]
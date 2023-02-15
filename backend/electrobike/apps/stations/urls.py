from django.urls import path
from .views import Station

urlpatterns = [
    path('stations', Station.as_view({'get':'getStations'})),
    path('stations/create', Station.as_view({'post':'addStation'})),
    path('stations/delete/<idStation>', Station.as_view({'delete':'deleteStation'})),
    path('stations/update/<idStation>', Station.as_view({'put':'updateStation'})),

]
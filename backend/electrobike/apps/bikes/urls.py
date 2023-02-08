from django.urls import path
from .views import Bike

urlpatterns = [
    path('bikes', Bike.as_view({'get':'getBikes'})),
    path('bikes/create', Bike.as_view({'post':'addBike'})),
    path('bikes/delete/<idBike>', Bike.as_view({'delete':'deleteBike'})),
    path('bikes/update/<idBike>', Bike.as_view({'put':'updateBike'}))
]
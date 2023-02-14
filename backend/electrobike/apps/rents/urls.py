from django.urls import path
from .views import Rent

urlpatterns = [
    path('rents/reserve/bike/<idBike>', Rent.as_view({'get':'reserveBike'})),
    path('rents/rent/bike/<bikeSlug>', Rent.as_view({'get':'rentBike'})),
    path('rents/leave/slot/<idSlot>', Rent.as_view({'get':'leaveSlot'})),
    path('rents/leave/bike/<bikeSlug>', Rent.as_view({'get':'leaveBike'}))
]

from django.urls import path
from .view import Slot

urlpatterns = [
    path('slots', Slot.as_view({'get':'getSlots'})),
    path('slots/create', Slot.as_view({'post':'addSlot'}))
]
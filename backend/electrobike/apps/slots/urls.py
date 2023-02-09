from django.urls import path
from .views import Slot

urlpatterns = [
    path('slots', Slot.as_view({'get':'getSlots'})),
    path('slots/create', Slot.as_view({'post':'addSlot'})),
    path('slots/delete/<idSlot>', Slot.as_view({'delete':'deleteSlot'}))
]
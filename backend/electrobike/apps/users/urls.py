from django.urls import path
from .views import (User, AuthUser)

urlpatterns = [
    path('users', User.as_view({'get':'getUsers'})),
    path('users/create', User.as_view({'post':'addUser'})),
    path('users/delete/<idUser>', User.as_view({'delete':'deleteUser'})),
    path('users/update/<idUser>', User.as_view({'put':'updateUser'})),
    path('users/login', AuthUser.as_view({'post':'login'})),
    path('users/register', AuthUser.as_view({'post':'register'}))
]

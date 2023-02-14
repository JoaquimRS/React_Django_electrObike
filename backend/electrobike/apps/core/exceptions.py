from rest_framework import status
from rest_framework.exceptions import APIException
from django.utils.translation import gettext as _

class NotAllowedToRent(APIException):
    status_code = status.HTTP_405_METHOD_NOT_ALLOWED
    default_detail = _('No puedes Rentar una Bicicleta')
    default_code = 'no_puedes_rentar'
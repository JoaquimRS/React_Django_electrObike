import jwt

from django.conf import settings

from rest_framework import authentication, exceptions

from electrobike.apps.clients.models import Client
from electrobike.apps.users.models import User


class JWTAuthenticationUser(authentication.BaseAuthentication):
    authentication_header_prefix = 'Bearer'
    def authenticate(self, request):
        """
        The `authenticate` method is called on every request, regardless of
        whether the endpoint requires authentication. 

        `authenticate` has two possible return values:

        1) `None` - We return `None` if we do not wish to authenticate. Usually
        this means we know authentication will fail. An example of
        this is when the request does not include a token in the
        headers.

        2) `(user, token)` - We return a user/token combination when 
        authentication was successful.

        If neither of these two cases were met, that means there was an error.
        In the event of an error, we do not return anything. We simple raise
        the `AuthenticationFailed` exception and let Django REST Framework
        handle the rest.
        """
        request.user = None
        request.User = None

        if not 'Authorizationuser' in request.headers:
            return None
            
        auth_header = request.headers['Authorizationuser'].split()
        auth_header_prefix = self.authentication_header_prefix.lower()

        if not auth_header:
            return None

        if len(auth_header) == 1:
            return None

        elif len(auth_header) > 2:
            return None
        
        prefix = auth_header[0]
        token = auth_header[1]
        if prefix.lower() != auth_header_prefix:
            return None

        return self._authenticate_credentials(request, token)

    def _authenticate_credentials(self, request, token):
        """
        Try to authenticate the given credentials. If authentication is
        successful, return the user and token. If not, throw an error.
        """
        try:
            payload = jwt.decode(token, settings.SECRET_KEY)
        except:
            msg = 'Invalid authentication. Could not decode token.'
            raise exceptions.AuthenticationFailed(msg)        
        if 'role' in payload:
            try:
                user = User.objects.get(email=payload['email'])
            except User.DoesNotExist:
                msg = 'No user matching this token was found.'
                raise exceptions.AuthenticationFailed(msg)
            request.User = user
            return None
        raise exceptions.AuthenticationFailed("Token has no Role")
        

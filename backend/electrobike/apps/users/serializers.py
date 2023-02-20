from rest_framework import serializers
from .models import User
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from rest_framework import exceptions
import argon2

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name','email','password','role')
    def getUsers():
        queryset = User.objects.all()
        return [UserDictionary.to_user(user) for user in queryset]
    def addUser(newUser):
        newUser['password'] = argon2.PasswordHasher().hash(newUser['password'])
        serializer = UserSerializer(
            data=newUser
        )
        serializer.is_valid(raise_exception=True)
        return {'msg':"Usuario creado correctemente",'user':UserDictionary.to_user(serializer.save())}
    def deleteUser(idUser):
        try:
            user = User.objects.get(id_user=idUser)
            user.delete()
            return {'msg':"Usuario borrado correctamente"}
        except User.DoesNotExist:
            msg = 'Usuario no existe.'
            raise exceptions.NotFound(msg)
    def updateUser(modUser,idUser):
        try:
            # Get the oldUser and check if exists
            oldUser = User.objects.get(id_user=idUser)
            # Validate User
            if modUser['email'] == oldUser.email:
                modUser.pop('email',None)
            UserSerializer(oldUser, data=modUser, partial=True).is_valid(raise_exception=True)
            # Hash Password
            modUser['password'] = argon2.PasswordHasher().hash(modUser['password'])
            # Update the user
            User.objects.filter(id_user=idUser).update(**modUser)
            # Find the final User and return
            user = User.objects.get(id_user=idUser)
            return {'msg':"Usuario modificado correctamente",'user':UserDictionary.to_user(user)}
        except User.DoesNotExist:
            msg = 'Usuario no existe.'
            raise exceptions.NotFound(msg)

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fiels = ('email','password')
    def login(infoUser):
        try:
            user = User.objects.get(email=infoUser['email'])
            argon2.PasswordHasher().verify(user.password, infoUser['password'])
            return AuthUserDictionary.response_user(user,status=status.HTTP_202_ACCEPTED)
        except Exception as e:
            return Response({'detail':"El usuario o la contraseña son incorrectos"},status=status.HTTP_400_BAD_REQUEST)

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name','email','password')
    def register(infoUser):
        infoUser['password'] = argon2.PasswordHasher().hash(infoUser['password'])
        serializer = RegisterSerializer(data=infoUser)
        serializer.is_valid(raise_exception=True)
        return AuthUserDictionary.response_user(serializer.save(),status=status.HTTP_201_CREATED)

class UserDictionary(serializers.ModelSerializer):
    def to_user(instance):
        return {
            'id_user': instance.id_user,
            'name': instance.name,
            'email': instance.email,
            'role': instance.role
        }

class AuthUserDictionary(serializers.ModelSerializer):
    def response_user(instance,status):
        return Response({
            'user':{
                'id_user':instance.id_user,
                'name': instance.name,
                'email': instance.email,
                'role': instance.role,
            },
            'token': instance.token,
            'refresh_token': instance.refresh_token
        },status=status)
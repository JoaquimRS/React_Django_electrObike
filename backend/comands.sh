#!/bin/bash

case $1 in
    'bc')
        find . -name __pycache__ -type d -exec rm -rf {} +
        ;;
    'cm')
        python3 manage.py makemigrations
        ;;
    'cm2')
        python3 manage.py makemigrations $2
        ;;
    'am')
        python3 manage.py migrate
        ;;
    *)
        echo "No funciona, debes introducir [borrar_cache,crear_migrations,crear_migrations2 + parametro,aplicar_migrations]"
        ;;
esac
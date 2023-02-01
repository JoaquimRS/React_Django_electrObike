#!/bin/bash
if [ $# -eq 0 ]; then
    echo -e "
    \033[1mLas opciones son las siguientes:\033[0m
    \033[32m1) 🧹 Borrar Cache\033[0m
    \033[32m2) 📦 Crear Migraciones\033[0m
    \033[32m3) 🔧 Crear Migracion de Modelo\033[0m
    \033[32m4) 🚀 Aplicar Migraciones\033[0m
    \033[32m5) 🗑 Borrar Migraciones\033[0m
    \033[32m6) 👮 Crear Superusuario\033[0m
    "
    read -p "Elige una opción: " opcion

    case $opcion in
    '1')
        find . -name pycache -type d -exec rm -rf {} +
        ;;
    '2')
        python3 manage.py makemigrations
    ;;
    '3')
        read -p "Elige el nombre del modelo: " modelo
        python3 manage.py makemigrations $modelo
    ;;
    '4')
        python3 manage.py migrate
    ;;
    '5')
        find . -name migrations -type d -exec rm -rf {} +
        ;;
    '6')
        python3 manage.py createsuperuser
    ;;
    *)
        echo "Opción inválida."
    ;;
    esac
else
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
    'bm')
        find . -name migrations -type d -exec rm -rf {} +
        ;;
    'cs')
        python3 manage.py createsuperuser
        ;;
    *)
        echo "No funciona, debes introducir [borrar_cache,crear_migrations,crear_migrations2 + parametro,aplicar_migrations,borrar_migrations,crear_superusuario]"
        ;;
esac

fi

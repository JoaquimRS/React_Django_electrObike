FROM python:3.9 AS build-stage

# Instalar las dependencias del proyecto que se encuentran en el archivo requirements.txt
COPY requirements.txt .
RUN pip install --user -r requirements.txt

FROM python:3.9

# Asegurerse de que el registro esté actualizado a pesar del posible almacenamiento en búfer
ENV PYTHONUNBUFFERED 1

WORKDIR /opt/app

# Mover los ficheros
COPY . .
# Copiar los recorsos del entorno de construcción
COPY --from=build-stage /root/.local/ /usr/local/

EXPOSE 8000

CMD ["/bin/bash"]

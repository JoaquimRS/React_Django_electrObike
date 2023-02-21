from django.urls import path
from .views import (Incident, IncidentClient)

urlpatterns = [
    path('incidents', Incident.as_view({'get':'getIncidents'})),
    path('incidents/create', Incident.as_view({'post':'addIncident'})),
    path('incidents/delete/<id_incident>', Incident.as_view({'delete':'deleteIncident'})),
    path('incidents/update/<id_incident>', Incident.as_view({'put':'updateIncident'})),
    path('incidents/new', IncidentClient.as_view({'post':'newIncident'})),
]

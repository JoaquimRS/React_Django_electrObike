import response from "./Api";

export default {
    newIncident(incident) {
        return response.post('/incidents/new', incident)
    },
    getIncidents() {
        return response.get('/incidents')
    },
    addIncidents(incident) {
        return response.post('/incidents/create', incident)
    },
    deleteIncidents(idIncident) {
        return response.del(`/incidents/delete/${idIncident}`)
    },
    updateIncidents(idIncident, incident) {
        return response.put(`/incidents/update/${idIncident}`, incident)
    }
}
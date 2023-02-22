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
    deleteIncidents(id) {
        return response.delete(`/incidents/delete/${id}`)
    },
    updateIncidents(id, incident) {
        return response.put(`/incidents/update/${id}`, incident)
    }
}
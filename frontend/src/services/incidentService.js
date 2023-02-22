import response from "./Api";

export default {
    newIncident(incident) {
        return response.post('/incidents/new', incident)
    }
}
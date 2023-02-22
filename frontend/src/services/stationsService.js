import response from './Api'

export default {
    getStations() {
        return response.get('/stations')
    },
    addStations(newStation) {
        return response.post('/stations/create', newStation)
    },
    deleteStations(idStation) {
        return response.del(`/stations/delete/${idStation}`)
    },
    updateStations(idStation, modStation) {
        return response.put(`/stations/update/${idStation}`, modStation)
    }
}

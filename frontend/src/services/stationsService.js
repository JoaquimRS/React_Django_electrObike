import response from './Api'

export default {
    getStations() {
        return response.get('/stations')
    },
    getStationId(id) {
        return response.get(`/stations/${id}`)
    }
}

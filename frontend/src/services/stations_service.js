import response from './Api'

export default {
    getStations() {
        return response.get('/stations')
    }
}

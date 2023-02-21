import response from './Api'

export default {
    getClients() {
        return response.get('/clients')
    }
}
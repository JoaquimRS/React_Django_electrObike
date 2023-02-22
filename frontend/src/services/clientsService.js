import response from './Api'

export default {
    getClients() {
        return response.get('/clients')
    },
    deleteClients(idClient) {
        return response.del(`/clients/delete/${idClient}`)
    }
}
import response from './Api'

export default {
    getUsers() {
        return response.get('/users')
    },
    addUsers(newUser) {
        return response.post('/users/create',newUser)
    },
    deleteUsers(idUser) {
        return response.del(`/users/delete/${idUser}`)
    },
    updateUsers(idUser, modUser) {
        return response.put(`/users/update/${idUser}`, modUser)
    }

}

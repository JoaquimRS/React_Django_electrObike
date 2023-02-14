import response from './Api'

export default {
    getProfile() {
        return response.get('/profile')
    },
    login(user) {
        return response.post('/auth/login', user)
    }
}
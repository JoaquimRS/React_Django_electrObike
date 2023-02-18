import response from './Api'

export default {
    getProfile() {
        return response.get('/profile')
    },
    updateProfile(user) {
        return response.put('/profile/update', user)
    },
    login(user) {
        return response.post('/auth/login', user)
    }
}
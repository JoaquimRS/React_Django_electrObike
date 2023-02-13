import response from './Api'



export default {
    getUser: new Promise((resolve, reject) => {
        resolve({ data: 'joan' })
    }),
    login(user) {
        return response.post('/auth/login', user)
    }
}
const JWTService = {
    getToken: () => {
        return localStorage.getItem('token')
    },
    setToken: (token) => {
        localStorage.setItem('token', token)
    },
    deleteToken: () => {
        localStorage.removeItem('token')
    }
}

export default JWTService
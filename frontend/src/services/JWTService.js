const JWTService = {
    getToken: () => {
        return window.localStorage.getItem('token')
    },
    setToken: (token) => {
        window.localStorage.setItem('token', token)
    },
    removeToken: () => {
        window.localStorage.removeItem('token')
    }
}

export default JWTService
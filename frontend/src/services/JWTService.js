const JWTService = {
    getToken: () => {
        return window.localStorage.getItem('token')
    },
    setToken: ({ token, refresh_token }) => {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('refreshToken', refresh_token)
    },
    removeToken: () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('refreshToken')
    }
}

export default JWTService
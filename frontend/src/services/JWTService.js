const JWTService = {
    getToken: () => {
        return window.localStorage.getItem('token')
    },
    setToken: ({ token, refresh_token }) => {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('refreshToken', refresh_token)
    },
    setAdminToken: ({ token, refresh_token }) => {
        window.localStorage.setItem('adminToken', token)
        window.localStorage.setItem('adminRefreshToken', refresh_token)
    },
    removeToken: () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('refreshToken')
        window.localStorage.removeItem('adminToken')
        window.localStorage.removeItem('adminRefreshToken')
    }
}

export default JWTService
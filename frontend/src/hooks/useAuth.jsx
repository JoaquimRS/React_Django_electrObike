import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import AuthService from "../services/authService"
import JWTService from "../services/JWTService"

export default function useAuth() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = useCallback((user) => {
        AuthService.login(user).then(res => {
            JWTService.setToken({ token: res.body.token, refresh_token: res.body.refresh_token })
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'success',
                    message: "Bienvenido " + res.body.client.name,
                    show: true
                }
            });
            dispatch({
                type: 'SET_USER', payload: res.body.client
            });

            navigate("/home")
        }).catch(err => {
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'error',
                    message: err.response.body.detail,
                    show: true
                }
            });
        })
    }, [])

    const logout = useCallback(() => {
        JWTService.removeToken()
        dispatch({
            type: 'SET_USER', payload: null
        });
        navigate("/home")
    }, [])

    return { login, logout }
}
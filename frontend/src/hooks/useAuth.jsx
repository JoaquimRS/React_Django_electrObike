import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import AuthService from "../services/authService"
import JWTService from "../services/JWTService"

export default function useAuth() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const showToastr = useCallback((type, message) => {
        dispatch({
            type: 'SET_TOASTR', payload: {
                type: type,
                message: message,
                show: true
            }
        });
    }, [])

    const login = useCallback((user) => {
        AuthService.login(user).then(res => {
            JWTService.setToken({ token: res.body.token, refresh_token: res.body.refresh_token })
            showToastr('success', "Bienvenido " + res.body.client.name)
            dispatch({
                type: 'SET_USER', payload: res.body.client
            });
            AuthService.userLogin(user).then(res => {
                JWTService.setAdminToken({ token: res.body.token, refresh_token: res.body.refresh_token })
                console.log(res);
            }).catch(err => {
                console.log('No es admin');
            })
            navigate("/home")
        }).catch(err => {
            showToastr('error', err.response.body.detail)
        })
    }, [])

    const toRegister = useCallback((user) => {
        AuthService.register(user).then(res => {
            JWTService.setToken({ token: res.body.token, refresh_token: res.body.refresh_token })
            showToastr('success', "Bienvenido " + res.body.client.name)
            dispatch({
                type: 'SET_USER', payload: res.body.client
            });
            navigate("/home")
        }).catch(err => {
            showToastr('error', err.response.body.detail)
        })
    }, [])

    const logout = useCallback(() => {
        JWTService.removeToken()
        dispatch({
            type: 'SET_USER', payload: null
        });
        navigate("/home")
    }, [])

    return { login, logout, toRegister }
}
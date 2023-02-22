import { useCallback, useState } from "react"
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
            loginAdmin(user)
            navigate("/home")
        }).catch(err => {
            showToastr('error', err.response.body.detail)
        })
    }, [])

    const loginAdmin = useCallback((user) => {
        const userAdmin = {
            email: user.email,
            password: user.password
        }
        AuthService.userLogin(userAdmin).then(res => {
            JWTService.setAdminToken({ token: res.body.token, refresh_token: res.body.refresh_token })
            dispatch({
                type: 'SET_ADMIN', payload: true
            });
        }).catch(err => {
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

    const profile = useCallback(() => {
        AuthService.getProfile().then(res => {
            dispatch({ type: "SET_USER", payload: res.body })
        })
        if (JWTService.getAdminToken()) {
            AuthService.isAdmin().then(res => {
                dispatch({ type: "SET_ADMIN", payload: true })
            }).catch(err => {
                dispatch({ type: "SET_ADMIN", payload: false })
            })
        }
    }, [])

    const logout = useCallback(() => {
        JWTService.removeToken()
        dispatch({
            type: 'SET_USER', payload: null
        });
        navigate("/home")
    }, [])

    return { login, logout, toRegister, loginAdmin, profile }
}
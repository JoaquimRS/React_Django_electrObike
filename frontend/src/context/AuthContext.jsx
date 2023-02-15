import React, { useEffect, useState } from "react"

import JWTService from '../services/JWTService'
import AuthService from "../services/authService"
import { useDispatch } from "react-redux"

export const AuthContext = React.createContext()

export function AuthContextProvider({ children }) {

    const dispatch = useDispatch()

    useEffect(() => {
        const token = JWTService.getToken()
        if (token) {
            AuthService.getProfile().then(res => {
                dispatch({ type: "SET_USER", payload: res.body })
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
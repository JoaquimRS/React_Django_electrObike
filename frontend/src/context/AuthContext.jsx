import React, { useEffect, useState } from "react"

import JWTService from '../services/JWTService'
import AuthService from "../services/AuthService"
import { useDispatch } from "react-redux"

export const AuthContext = React.createContext()

export function AuthContextProvider({ children }) {

    const dispatch = useDispatch()

    useEffect(() => {
        const token = JWTService.getToken()
        if (token) {
            // AuthService.getUser().then(res => {
            AuthService.getUser.then(res => {
                console.log(res.data)
                dispatch({ type: "SET_USER", payload: res.data })
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
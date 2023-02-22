import React, { useEffect, useState } from "react"

import JWTService from '../services/JWTService'
import useAuth from "../hooks/useAuth"

export const AuthContext = React.createContext()

export function AuthContextProvider({ children }) {

    const { profile } = useAuth()

    useEffect(() => {
        const token = JWTService.getToken()
        if (token) {
            profile()
        }
    }, [])

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
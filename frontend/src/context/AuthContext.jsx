import React, { useEffect, useState } from "react"

import JWTService from '../services/JWTService'
import AuthService from "../services/AuthService"
import { useDispatch } from "react-redux"
import { setUser } from "../store/Reducers/authReducer"

export const AuthContext = React.createContext()

export function AuthContextProvider({ children }) {

    const dispatch = useDispatch()

    useEffect(() => {
        const token = JWTService.getToken()
        if (token) {
            AuthService.getUser().then(res => {
                dispatch(setUser(res))
            }).catch(err => {
                console.log(err)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
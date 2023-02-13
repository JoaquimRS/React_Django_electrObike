import { useCallback } from "react"
import { useDispatch } from "react-redux"
import AuthService from "../services/AuthService"

export default function useAuth() {

    const dispatch = useDispatch()

    const login = useCallback((user) => {
        AuthService.login(user).then(res => {
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'success',
                    message: "Bienvenido " + res.body.client.name,
                    show: true
                }
            });
            console.log(res)
        }).catch(err => {
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'error',
                    message: err.response.body.detail,
                    show: true
                }
            });
            console.log(err.response.body.detail)
        })
    }, [])

    return { login }
}
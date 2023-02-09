import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const AuthGuard = () => {

    const user = useSelector(state => state.auth.user)

    console.log(user)

    return user ? <Outlet /> : <Navigate to="/login" />
}

export default AuthGuard
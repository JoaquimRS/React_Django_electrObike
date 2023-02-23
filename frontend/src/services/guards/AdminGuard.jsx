import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import JWTService from "../JWTService"

const AuthGuard = () => {
    const admin = useSelector(state => state.auth.admin)

    return JWTService.getAdminToken() || admin ? <Outlet /> : <Navigate to="/home" />
}

export default AuthGuard
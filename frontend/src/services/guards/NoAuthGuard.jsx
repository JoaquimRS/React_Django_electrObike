import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import JWTService from "../JWTService"
// import { setUser } from "../../store/Reducers/authReducer"

const AuthGuard = () => {
    const user = useSelector(state => state.auth.user)

    return !JWTService.getToken() || !user ? <Outlet /> : <Navigate to="/profile" />
}

export default AuthGuard
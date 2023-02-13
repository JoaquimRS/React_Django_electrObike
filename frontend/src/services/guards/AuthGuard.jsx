import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
// import { setUser } from "../../store/Reducers/authReducer"

const AuthGuard = () => {
    const user = useSelector(state => state.auth.user)

    return user ? <Outlet /> : <Navigate to="/login" />
}

export default AuthGuard
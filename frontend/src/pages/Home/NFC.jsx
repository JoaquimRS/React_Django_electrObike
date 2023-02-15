import { useEffect, useState } from "react"
import "./Home.scss"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import Bike from "../../assets/icons/Bike"
import { rentsService } from "../../services"
import AuthService from "../../services/authService"

const NFC = () => {
    const { slugBike } = useParams()
    const authClient = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [client, setClient] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        setClient(authClient)
    }, [authClient])

    useEffect(() => {
        if (client) {
            rentsService.rentBike(slugBike).then(res => {
                dispatch({
                    type: 'SET_TOASTR', payload: {
                        type: 'success',
                        message: "Has rentado la Bici " +slugBike.split("_")[0],
                        show: true
                    }
                })
                AuthService.getProfile().then(res => {
                    dispatch({ type: "SET_USER", payload: res.body })
                })
                navigate("/home")
            }).catch(err => {
                dispatch({
                    type: 'SET_TOASTR', payload: {
                        type: 'error',
                        message: err.response.body.detail,
                        show: true
                    }
                })
            })
        }
    }, [client])

    return (
        <div>
            <img className="bike-loader" src="/src/assets/bikes/bike-loader.gif"/>
        </div>
    )
}

export default NFC


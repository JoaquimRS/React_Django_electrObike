import {NotificationItem} from "../../components";
import Refresh from "../../assets/icons/Refresh";
import "./Notification.scss"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Notification = () => {
    const authClient = useSelector(state => state.auth.user)
    const [client, setClient] = useState(null)
    const {profile} = useAuth()
    useEffect(() => {
        setClient(authClient)
    }, [authClient])

    return (
        <div className="notifications">
            <div className="header">
                <h2>Centro de notificaciones</h2>
                <div className="refresh-icon" onClick={() => profile()}>
                    <Refresh/>
                </div>
            </div>
            <div className="items">
            {client 
                ? client.notifications.map((notification, index) => (<NotificationItem key={index} notification={notification}/>)) 
                : null}
            </div>
        </div>
    )
}

export default Notification
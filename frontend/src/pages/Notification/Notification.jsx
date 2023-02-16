import {NotificationItem} from "../../components";
import Refresh from "../../assets/icons/Refresh";
import "./Notification.scss"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Notification = () => {
    const authClient = useSelector(state => state.auth.user)
    const [client, setClient] = useState(null)
   
    useEffect(() => {
        setClient(authClient)
    }, [authClient])

    return (
        <div className="notifications">
            <div className="header">
                <h2>Centro de notificaciones</h2>
                <div className="refresh-icon">
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
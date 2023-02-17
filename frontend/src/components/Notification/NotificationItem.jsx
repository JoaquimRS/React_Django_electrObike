import { useEffect, useState } from "react";

const NotificationItem = ({notification}) => {
    const [time, setTime] = useState(msToTime(Math.abs(new Date() - new Date(notification.expiration))));

    function msToTime(duration) {
        let seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        minutes = (minutes < 10) ? "0" + minutes : minutes;

        return hours > 0 ? hours + ":" + minutes : minutes;
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(msToTime(Math.abs(new Date() - new Date(notification.expiration))));
        }, 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="notification-item">
            <div className="image">
                <img src={notification.img} />
            </div>
            <div className="information">
                <p className="title">{notification.title}</p>
                {notification.description ? <p>{notification.description}</p> : null}
            </div>
            <span className="expiration">{time} min</span>
        </div>
    )
}

export default NotificationItem
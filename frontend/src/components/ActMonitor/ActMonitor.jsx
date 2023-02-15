import { useState } from 'react'
import Bike from '../../assets/icons/Bike'
import NFC from '../../assets/icons/NFC'
import { useEffect } from 'react';
const ActMontior = (rent) => {

    const [time, setTime] = useState("00:00");

    function msToTime(duration) {
        let seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours > 0 ? hours + ":" + minutes + ":" + seconds : minutes + ":" + seconds;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(msToTime(Math.abs(new Date() - new Date(rent.rent.get_at))));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [rent.rent.get_at]);

    return  (
        <div className={rent.rent.status != 2 ? " activity-monitor activity-monitor-grey" : "activity-monitor"}>
            <div>
                { rent.rent.status != 2 ? <NFC /> : <Bike/>}
            </div>
            {   rent.rent.status != 2 ?
                <div>
                    <h1>Usar NFC</h1>
                    <h1>Bici {rent.rent.bike_plate}</h1>
                </div>
                :
                <div>
                    <h1>En uso</h1>
                    <h1>{time}</h1>
                </div>
            }
            <div>
            </div>
        </div>
    )
}

export default ActMontior
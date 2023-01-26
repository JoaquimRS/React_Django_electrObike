import { useState } from 'react'
import { ReactComponent as Bike } from '../../assets/icons/bike.svg'

const ActMontior = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)

    return (
        <div className="activity-monitor">
            <div>
                <Bike />
            </div>
            <div>
                <h1>En uso</h1>
                <h1>{time}</h1>
            </div>
        </div>
    )
}

export default ActMontior
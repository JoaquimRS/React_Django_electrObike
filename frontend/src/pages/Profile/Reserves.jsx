import { useSelector } from "react-redux"

export default function Reserves() {

    const rents = useSelector(state => state.auth.rents)

    return (
        <div className="main-rent">
            <h1>Reserves</h1>

            {rents.map((rent, i) => (
                <Rent
                    key={i}
                    rent={rent}
                />
            ))}
        </div>
    )
}

const Rent = ({ rent }) => {

    function msToTime(duration) {
        let seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours > 0 ? hours + ":" + minutes + ":" + seconds : minutes + ":" + seconds;
    }

    const time = msToTime(Math.abs(new Date(rent.leave_at) - new Date(rent.get_at)));

    switch (rent.status) {
        case '4':
            return (
                <div className="rent-container">
                    <div>
                        <p><strong>Bici: </strong> {rent.bike_plate}</p>
                        <p> <strong>Duración: </strong>{time}</p>
                        <p><strong>Hora reserva:</strong> {msToTime(new Date(rent.get_at))}</p>
                    </div>
                    <div>
                        <p> <strong>Distancia: </strong>{rent.kms}km </p>
                        <p> <strong>De: </strong> {rent.get_station_name} </p>
                    <p> <strong>A: </strong> {rent.leave_station_name}</p>
                    </div>
                </div>
            )
        default:
            return <div>In progress</div>
    }
}
import { useSelector } from 'react-redux'

export default function Incidents() {

    const incidents = useSelector(state => state.auth.incidents)

    return (
        <div className='main-insident'>
            <h1>Incidents</h1>

            {incidents.map((incident, i) => (
                <Incident
                    key={i}
                    incident={incident}
                />
            ))}
        </div>
    )
}

const Incident = ({ incident }) => {

    return (
        <div className='insident-container'>

            <div >
                <p><strong>Tipo: </strong> {incident.type}</p>
            </div>
            <div>
                {
                    incident.type === 'station'
                        ? <p><strong>Estación: </strong>{incident.object.name}</p>
                        : null
                }
                {
                    incident.type === 'bike'
                        ? <p><strong>Bici: </strong>{incident.object.bike_plate}</p>
                        : null
                }
                {
                    incident.type === 'slot'
                        ? <div>
                            <p><strong>Slot: </strong>{incident.object.number}</p>
                            <p><strong>Esta en la estación: </strong>{incident.object.station.name}</p>
                        </div>
                        : null
                }
            </div>
            <div>
                <p> <strong>Descripción: </strong>{incident.description}</p>
            </div>
        </div >
    )

}
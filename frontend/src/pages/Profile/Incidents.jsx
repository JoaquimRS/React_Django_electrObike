import { useSelector } from 'react-redux'

export default function Incidents() {

    const incidents = useSelector(state => state.auth.incidents)

    return (
        <>
        <h1>Incidents</h1>
        <div className='main-insident'>

            {incidents.map((incident, i) => (
                <Incident
                key={i}
                incident={incident}
                />
                ))}
        </div>
        </>
    )
}

const Incident = ({ incident }) => {
    let state_options = [
        {name: "🔴", val: "1"},
        {name: "🟡", val: "2"},
        {name: "🟢", val: "3"}
    ]
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
            <div className='incident-state'>
                <p>{ state_options.map((option) => (option.val == incident.state ? option.name : null) ) }</p>
            </div>
        </div >
    )

}
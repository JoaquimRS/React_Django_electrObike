import { Marker } from 'react-map-gl';

const CustomMarker = ({ latitude, longitude, name }) => {

    return (
        <Marker
            latitude={latitude}
            longitude={longitude}
            anchor="bottom"

        >
            <div className="marker">
                <p>{name}</p>
                <img src="http://turismo.ontinyent.es/ontinyent/uploaded/Patrimonio/casa_del_consell_2.jpg" alt="marker" width={100}/>
            </div>
        </Marker>
    )

}

export default CustomMarker
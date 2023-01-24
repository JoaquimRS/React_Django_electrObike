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
                <img src="https://img.icons8.com/emoji/48/000000/round-pushpin-emoji.png" alt="marker" />
            </div>
        </Marker>
    )

}

export default CustomMarker
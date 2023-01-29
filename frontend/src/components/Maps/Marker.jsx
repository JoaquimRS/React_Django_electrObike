import { Marker } from 'react-map-gl';

const CustomMarker = ({ item }) => {

    return (
        <Marker
            latitude={item.lat}
            longitude={item.long}
            anchor="center"
        >
            <div className="marker">
                <div>{item.name}</div>
                <img src={item.img} alt="marker" width={50} />
            </div>
        </Marker>
    )

}

export default CustomMarker
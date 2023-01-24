import ReactMapGL from 'react-map-gl';
import CustomMarker from './Marker';

const Maps = () => {

    const YOUR_ACCESS_TOKEN = "pk.eyJ1Ijoiam9hbmdnNCIsImEiOiJjbGRhaXZxNjMwaXBzM3Bzend2MTBhdWxsIn0.ZZL5dl-OU8fFrTQfXuqXAw"

    const markers = [
        {
            latitude: 38.820155,
            longitude: -0.610000,
            name: "Marker 1"
        },
        {
            latitude: 38.825155,
            longitude: -0.6019766,
            name: "Marker 2"
        },
        {
            latitude: 38.828155,
            longitude: -0.6017766,
            name: "Marker 3"
        }

    ]

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={YOUR_ACCESS_TOKEN}
            initialViewState={{
                latitude: 38.820155,
                longitude: -0.610000,
                zoom: 14
            }}
        >
            {markers.map((marker, index) => (
                <CustomMarker
                    key={index}
                    latitude={marker.latitude}
                    longitude={marker.longitude}
                    name={marker.name}
                />
            ))}

        </ReactMapGL>
    );
}
// 38.825155,-0.6019766
export default Maps
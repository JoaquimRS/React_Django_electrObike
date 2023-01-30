import ReactMapGL from 'react-map-gl';
import CustomMarker from './Marker';
import 'mapbox-gl/dist/mapbox-gl.css'

const Maps = ({ stations }) => {

    const YOUR_ACCESS_TOKEN = "pk.eyJ1Ijoiam9hbmdnNCIsImEiOiJjbGRhaXZxNjMwaXBzM3Bzend2MTBhdWxsIn0.ZZL5dl-OU8fFrTQfXuqXAw"

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
            {stations.length > 0 ? stations.map((item, index) => (
                <CustomMarker
                    key={index}
                    item={item}
                />
            )) : null}

        </ReactMapGL>
    );
}
// 38.825155,-0.6019766
export default Maps
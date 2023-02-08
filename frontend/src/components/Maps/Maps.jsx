import ReactMapGL from 'react-map-gl';
import CustomMarker from './Marker';
import 'mapbox-gl/dist/mapbox-gl.css'
import { useState } from 'react';

const Maps = ({ stations }) => {

    const YOUR_ACCESS_TOKEN = "pk.eyJ1Ijoiam9hbmdnNCIsImEiOiJjbGRhaXZxNjMwaXBzM3Bzend2MTBhdWxsIn0.ZZL5dl-OU8fFrTQfXuqXAw"
    const [zoomState, setZoomState] = useState(true)

    const handleZoom = (e) => {
        if (e.viewState.zoom < 13) {
            setZoomState(false)
        } else {
            setZoomState(true)
        }
    }

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={YOUR_ACCESS_TOKEN}
            onZoom={handleZoom}
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
                    zoomState={zoomState}
                />
            )) : null}

        </ReactMapGL>
    );
}
// 38.825155,-0.6019766
export default Maps
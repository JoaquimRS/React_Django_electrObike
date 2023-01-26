import ReactMapGL from 'react-map-gl';
import CustomMarker from './Marker';

import stations_service from '../../services/stations_service';
import { useEffect, useState } from 'react';

const Maps = ({ stations }) => {

    const YOUR_ACCESS_TOKEN = "pk.eyJ1Ijoiam9hbmdnNCIsImEiOiJjbGRhaXZxNjMwaXBzM3Bzend2MTBhdWxsIn0.ZZL5dl-OU8fFrTQfXuqXAw"

    const temp = [
        {
            lat: 38.813507,
            long: -0.610322,
            name: "Polideportivo Municipal de Ontinyent",
            img: "https://valenciaplaza.com/public/Image/2021/2/poliesportiu3_NoticiaAmpliada.jpg"
        },
        {
            lat: 38.821854,
            long: -0.599367,
            name: "Plaça Mestre Ferrero",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/07/55/93/20/zoco.jpg"
        },
        {
            lat: 38.824921,
            long: -0.603335,
            name: "El Teler",
            img: "https://periodicontinyent.com/wp-content/uploads/2021/10/IMG_1911.jpg"
        },
        {
            lat: 38.826207,
            long: -0.602835,
            name: "Plaça de la Concepció",
            img: "https://loclar.es/media/post/2020/11/img_9244b.jpg"
        },
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
            {stations.length > 0 ? stations.map((marker, index) => (
                <CustomMarker
                    key={index}
                    latitude={marker.lat}
                    longitude={marker.long}
                    name={marker.name}
                />
            )) : null}

        </ReactMapGL>
    );
}
// 38.825155,-0.6019766
export default Maps
import "./Home.css"
import Map from 'react-map-gl';


const Home = () => {


    return (
        <div>
            <Map
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                style={{ width: "100%", height: "100%", background: 'red' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            />
        </div>
    )
}

export default Home
import "./Home.css"
import { Maps, Navbar, ActMontior } from "../../components";
import { useEffect, useState } from "react";
import stations_service from "../../services/stations_service";
// import { webView } from "react";

const Home = () => {

    const [stations, setStations] = useState([])
    // useEffect(() => {
    //     stations_service.getStations().then((res) => {
    //         setStations(res.body)
    //     })
    // }, [])

    return (
        <div className="map-container">
            {/* <ActMontior /> */}
            <Maps stations={stations} />
        </div>
    );
}
// 38.825155,-0.6019766
export default Home
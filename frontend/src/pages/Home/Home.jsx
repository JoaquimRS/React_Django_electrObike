import "./Home.scss"
import { Maps, ActMontior } from "../../components";
import useStations from "../../hooks/useStations";
// import { webView } from "react";

const Home = () => {

    useStations();

    return (
        <div className="map-container">
            {/* <ActMontior /> */}
            <Maps />
        </div>
    );
}
// 38.825155,-0.6019766
export default Home
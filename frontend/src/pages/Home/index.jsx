import "./Home.css"
import { Maps, Navbar, ActMontior } from "../../components";
// import { webView } from "react";

const Home = () => {
    return (
        <div className="map-container">
            <ActMontior />
            <Maps />
            <Navbar />
        </div>
    );
}
// 38.825155,-0.6019766
export default Home
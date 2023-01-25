import "./Home.css"
import { Maps, Navbar } from "../../components";
// import { webView } from "react";

const Home = () => {
    return (
        <div className="map-container">
            <Maps />

            <Navbar />
        </div>
    );
}
// 38.825155,-0.6019766
export default Home
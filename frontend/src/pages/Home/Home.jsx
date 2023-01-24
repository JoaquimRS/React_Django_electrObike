import "./Home.css"
import { Maps } from "../../components";
// import { webView } from "react";

const Home = () => {

    // window.onload = function () {
    //     window.scrollTo(0, 1);
    // }

    return (
        <div className="map-container" onLoad={() => {
            // window.scrollTo(0, 10);
        }}>
            <Maps />
        </div>
    );
}
// 38.825155,-0.6019766
export default Home
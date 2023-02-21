import "./Home.scss"
import { Maps, ActMontior } from "../../components";
import useStations from "../../hooks/useStations";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Home = () => {
    useStations();

    const authClient = useSelector(state => state.auth.user);
    const [client, setClient] = useState(null);

    useEffect(() => {
        setClient(authClient);
    }, [authClient]);

    console.log(client);
    return (
        <div className="map-container">
            {client && client.has_rent ? <ActMontior rent={client.rents.filter(rent => rent.status != "4")[0]} /> : null}
            <Maps />
        </div>
    );
}

export default Home;

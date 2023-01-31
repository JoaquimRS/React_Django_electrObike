import { Marker } from 'react-map-gl';
import Bike from '../../assets/icons/Bike';

const CustomMarker = ({ item }) => {

    const handleOpen = () => {
        console.log(item.id_station)
    }

    return (
        <Marker
            latitude={item.lat}
            longitude={item.long}
            anchor="center"
        >
            <div className="marker" onClick={() => handleOpen()}>
                <div>{item.name}</div>
                <div className='container-img-and-bickes'>
                    <img src={item.img} alt="marker" />
                    <div className='container-number-bikes'>
                        <div>
                            <Bike />
                            <span>4</span>
                        </div>
                        <div>
                            <Bike />
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
        </Marker>
    )

}

export default CustomMarker
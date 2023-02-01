import { Marker } from 'react-map-gl';
import Bike from '../../assets/icons/Bike';
import { useState } from 'react';
import ElectroDialog from './ElectroDialog';


const CustomMarker = ({ item }) => {

    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(old => !old)
    }

    const slots = [
        {
            id: 1,
            used: true
        },
        {
            id: 2,
            used: false
        },
        {
            id: 3,
            used: true
        },
        {
            id: 4,
            used: false
        },
        {
            id: 5,
            used: false
        },
    ]

    const usedBikes = slots.filter(slot => slot.used === true).length;
    const freeBikes = slots.filter(slot => slot.used === false).length;

    return (
        <Marker
            latitude={item.lat}
            longitude={item.long}
            anchor="center"
        >
            <div className="marker" onClick={() => handleModal()}>
                <h3>{item.name}</h3>
                <div className='container-img-and-bickes'>
                    <img src={item.img} alt="marker" />
                    <div className='container-number-bikes'>
                        <div>
                            <Bike />
                            <span>{freeBikes}</span>
                        </div>
                        <div>
                            <Bike />
                            <span>{usedBikes}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open ? <ElectroDialog open={open} handleModal={handleModal} item={item} slots={slots} /> : null}
        </Marker>
    )

}

export default CustomMarker
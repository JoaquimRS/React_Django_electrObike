import { Marker } from 'react-map-gl';
import Bike from '../../assets/icons/Bike';
import { useState } from 'react';
import ElectroDialog from './ElectroDialog';
import LocationDot from '../../assets/icons/LocationDot';

const CustomMarker = ({ item, zoomState }) => {

    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(old => !old)
    }

    const freeBikes = item.slots.filter(slot => slot.bike).length;
    const usedBikes = item.slots.filter(slot => !slot.bike).length;

    return (
        <Marker
            latitude={item.lat}
            longitude={item.long}
            anchor="center"
        >

            {
                zoomState ? (
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
                ) : (
                    <div className="locaction-dot" onClick={() => handleViewport()} >
                        <LocationDot />
                    </div>
                )
            }

            {open ? <ElectroDialog open={open} handleModal={handleModal} item={item} slots={item.slots} /> : null}
        </Marker >
    )

}

export default CustomMarker
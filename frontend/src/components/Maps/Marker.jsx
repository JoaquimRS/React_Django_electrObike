import { Marker } from 'react-map-gl';
import Bike from '../../assets/icons/Bike';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import Electrodialog from './ElectroDialog';


const CustomMarker = ({ item }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(old => !old)
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
            {open ? <Electrodialog open={open} handleOpen={handleOpen} item={item} /> : null}
        </Marker>
    )

}

export default CustomMarker
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
            "id": 583,
            "used": false
        },
        {
            "id": 489,
            "used": false
        },
        {
            "id": 565,
            "used": true
        },
        {
            "id": 147,
            "used": true
        },
        {
            "id": 399,
            "used": true
        },
        {
            "id": 201,
            "used": false
        },
        {
            "id": 423,
            "used": true
        },
        {
            "id": 778,
            "used": true
        },
        {
            "id": 294,
            "used": false
        },
        {
            "id": 984,
            "used": true
        },
        {
            "id": 631,
            "used": false
        },
        {
            "id": 862,
            "used": false
        },
        {
            "id": 253,
            "used": false
        },
        {
            "id": 483,
            "used": true
        },
        {
            "id": 383,
            "used": false
        },
        {
            "id": 892,
            "used": false
        },
        {
            "id": 211,
            "used": true
        },
        {
            "id": 351,
            "used": true
        },
        {
            "id": 441,
            "used": false
        },
        {
            "id": 299,
            "used": true
        },
        {
            "id": 971,
            "used": true
        },
        {
            "id": 245,
            "used": false
        },
        {
            "id": 506,
            "used": true
        },
        {
            "id": 641,
            "used": true
        },
        {
            "id": 515,
            "used": true
        },
        {
            "id": 504,
            "used": true
        },
        {
            "id": 479,
            "used": false
        },
        {
            "id": 973,
            "used": true
        },
        {
            "id": 114,
            "used": false
        },
        {
            "id": 193,
            "used": false
        },
        {
            "id": 924,
            "used": true
        },
        {
            "id": 889,
            "used": false
        },
        {
            "id": 338,
            "used": true
        },
        {
            "id": 573,
            "used": false
        },
        {
            "id": 511,
            "used": true
        },
        {
            "id": 920,
            "used": false
        },
        {
            "id": 937,
            "used": false
        },
        {
            "id": 550,
            "used": true
        },
        {
            "id": 462,
            "used": true
        },
        {
            "id": 407,
            "used": true
        },
        {
            "id": 392,
            "used": true
        },
        {
            "id": 324,
            "used": false
        },
        {
            "id": 110,
            "used": false
        },
        {
            "id": 975,
            "used": false
        },
        {
            "id": 303,
            "used": false
        },
        {
            "id": 319,
            "used": false
        },
        {
            "id": 888,
            "used": true
        },
        {
            "id": 786,
            "used": true
        },
        {
            "id": 265,
            "used": true
        },
        {
            "id": 101,
            "used": true
        },
        {
            "id": 166,
            "used": true
        },
        {
            "id": 402,
            "used": false
        },
        {
            "id": 225,
            "used": false
        },
        {
            "id": 175,
            "used": false
        },
        {
            "id": 359,
            "used": false
        },
        {
            "id": 640,
            "used": false
        },
        {
            "id": 897,
            "used": false
        },
        {
            "id": 159,
            "used": false
        },
        {
            "id": 303,
            "used": false
        },
        {
            "id": 987,
            "used": false
        },
        {
            "id": 527,
            "used": false
        },
        {
            "id": 339,
            "used": true
        },
        {
            "id": 137,
            "used": true
        },
        {
            "id": 411,
            "used": true
        },
        {
            "id": 201,
            "used": false
        },
        {
            "id": 444,
            "used": true
        },
        {
            "id": 948,
            "used": false
        },
        {
            "id": 693,
            "used": false
        },
        {
            "id": 341,
            "used": false
        },
        {
            "id": 376,
            "used": false
        },
        {
            "id": 763,
            "used": false
        },
        {
            "id": 437,
            "used": true
        },
        {
            "id": 391,
            "used": true
        },
        {
            "id": 241,
            "used": false
        },
        {
            "id": 190,
            "used": true
        },
        {
            "id": 976,
            "used": false
        },
        {
            "id": 974,
            "used": false
        },
        {
            "id": 894,
            "used": true
        },
        {
            "id": 750,
            "used": true
        },
        {
            "id": 550,
            "used": true
        },
        {
            "id": 327,
            "used": false
        },
        {
            "id": 650,
            "used": false
        },
        {
            "id": 627,
            "used": false
        },
        {
            "id": 288,
            "used": false
        },
        {
            "id": 699,
            "used": false
        },
        {
            "id": 984,
            "used": true
        },
        {
            "id": 825,
            "used": true
        },
        {
            "id": 520,
            "used": false
        },
        {
            "id": 706,
            "used": true
        },
        {
            "id": 100,
            "used": false
        },
        {
            "id": 350,
            "used": false
        },
        {
            "id": 320,
            "used": false
        },
        {
            "id": 706,
            "used": true
        },
        {
            "id": 767,
            "used": true
        },
        {
            "id": 979,
            "used": true
        },
        {
            "id": 716,
            "used": false
        },
        {
            "id": 949,
            "used": false
        },
        {
            "id": 496,
            "used": false
        },
        {
            "id": 479,
            "used": false
        },
        {
            "id": 927,
            "used": true
        }
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
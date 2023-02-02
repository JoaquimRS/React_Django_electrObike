import { Paper } from '@mui/material';
import Bike from '../../assets/icons/Bike';
import FrontBike from '../../assets/icons/FrontBike';


export default function SlotsItem({ slots }) {

    return (
        <div className="slots-container">

            {
                slots.map((slot, i) => {
                    return <BikeSlot key={i} slot={slot} />
                })
            }
        </div>
    )
}

function BikeSlot({ slot }) {

    const handleClick = () => {
        console.log(slot)
    }

    return (
        <div
            style={{ fill: slot.bike_id ? "green" : "grey" }}
            className='slot'
            onClick={slot.bike_id ? handleClick : null}
        >
            <Paper>
                <div className='slot'>
                    <FrontBike used={slot.bike_id} />
                    <span>{slot.id}</span>
                </div>
            </Paper>
        </div>
    )
}
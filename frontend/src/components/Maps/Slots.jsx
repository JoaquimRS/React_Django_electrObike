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
    return (
        <div
            style={{ fill: slot.used ? "grey" : "green" }}
            className='slot'
        >
            <Paper>
                <div className='slot'>
                    <FrontBike used={slot.used} />
                    <span>{slot.id}</span>
                </div>
            </Paper>
        </div>
    )
}
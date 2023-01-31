import Bike from '../../assets/icons/Bike';
import FrontBike from '../../assets/icons/FrontBike';
export default function SlotsItem({ slot }) {

    return (
        <div
            style={{ fill: slot.used ? "grey" : "green" }}
            className='slot'
        >
            <div>
                <span>{slot.id}</span>
                <FrontBike used={slot.used} />
            </div>
        </div>
    )
}
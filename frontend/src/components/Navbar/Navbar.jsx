import { ReactComponent as Bell } from '../../assets/icons/bell.svg'
import { ReactComponent as Map } from '../../assets/icons/map.svg'
const Navbar = () => {

    return (
        <div className="navbar-container">
            <nav>
                <div ><Bell /></div>
                <div className="active"><Map /></div>
                <div><Bell /></div>
            </nav>
        </div>
    )
}

export default Navbar
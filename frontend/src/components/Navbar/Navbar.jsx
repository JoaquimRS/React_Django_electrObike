import Bell from '../../assets/icons/Bell'
import MapIcon from '../../assets/icons/Map'
import User from '../../assets/icons/User'
import { useLocation, Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {

    const location = useLocation()

    const activeProfile = ['/profile', '/login', '/register', '/profile/user', '/profile/reservations', '/profile/incidents']

    return (
        < div className="navbar-container" >
            <nav>
                <Link to="/notification" className={location.pathname === '/notification' ? 'active' : null}>
                    <Bell />
                </Link>
                <Link to="/home" className={location.pathname === '/home' ? 'active' : null}>
                    <MapIcon />
                </Link>
                <Link to="/profile" className={activeProfile.includes(location.pathname) ? 'active' : null}>
                    <User />
                </Link>
            </nav>
        </div >
    )
}
export default Navbar
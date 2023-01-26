import { ReactComponent as Bell } from '../../assets/icons/bell.svg'
import { ReactComponent as Map } from '../../assets/icons/map.svg'
import { ReactComponent as User } from '../../assets/icons/user.svg'

import { useLocation, Link } from 'react-router-dom'

import './Navbar.css'
import { startTransition } from 'react'
const Navbar = () => {

    const location = useLocation()

    return (
        < div className="navbar-container" >
            <nav>
                <Link to="/notification" className={location.pathname === '/notification' ? 'active' : null}>
                    <Bell />
                </Link>
                <Link to="/home" className={location.pathname === '/home' ? 'active' : null}>
                    <Map />
                </Link>
                <Link to="/profile" className={location.pathname === '/profile' ? 'active' : null}>
                    <User />
                </Link>
            </nav>
        </div >
    )
}
export default Navbar
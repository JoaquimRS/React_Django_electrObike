import Bell from '../../assets/icons/Bell'
import BellRing from '../../assets/icons/Bell_Ring'
import MapIcon from '../../assets/icons/Map'
import User from '../../assets/icons/User'
import { useLocation, Link } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
const Navbar = () => {

    const authClient = useSelector(state => state.auth.user)
    const [client, setClient] = useState(null)

    useEffect(() => {
        setClient(authClient)
    }, [authClient])

    const location = useLocation()

    const activeProfile = ['/profile', '/login', '/register']

    return (
        < div className="navbar-container" >
            <nav>
                <Link to="/notification" className={location.pathname === '/notification' ? 'active' : null}>
                    {client ?
                        <>
                            <BellRing/>
                            <div className='n-notification'>
                                <span>{client.notifications.length > 9 ? "+9" : client.notifications.length}</span>
                            </div>
                        </>
                        : <Bell/>
                    }
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
import './Admin.scss'
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Station from '../../assets/icons/Station';
import Slot from '../../assets/icons/Slot';
import Bike from '../../assets/icons/Bike'
import Bell from '../../assets/icons/Bell';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import User from '../../assets/icons/User';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Bikes, Incidents, Notifications, Rents, Slots, Stations, Clients, Users, Dashboard } from '../../components/AdminComponents';
import { useEffect, useState } from 'react';
import { ThreeDots } from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const Admin = () => {
    const [main_component, set_main_component] = useState(<Dashboard />)
    const [loading, set_loading] = useState(false);
    const admin_pages = [
        { icon: <HomeIcon />, name: "Dashboard", component: <Dashboard /> },
        { icon: <Station />, name: "Stations", component: <Stations /> },
        { icon: <Slot />, name: "Slots", component: <Slots /> },
        { icon: <Bike />, name: "Bikes", component: <Bikes /> },
        { icon: <Bell />, name: "Notifiactions", component: <Notifications /> },
        { icon: <AnnouncementIcon />, name: "Incidents", component: <Incidents /> },
        { icon: <ConfirmationNumberIcon />, name: "Rents", component: <Rents /> },
        { icon: <User />, name: "Clients", component: <Clients /> },
        { icon: <AdminPanelSettingsIcon />, name: "Users", component: <Users /> },
    ]

    const navigate = useNavigate()
    useEffect(() => {
        set_loading(true);
        setTimeout(() => {
            set_loading(false);
        }, 700);
    }, [main_component])

    return (
        <main className='root-admin'>
            <input type="checkbox" id="show_nav" className='show-nav'/>
            <div className='nav'>
                <div className='showButton'>
                    <label htmlFor="show_nav">
                        <MenuIcon />
                    </label>
                </div>
                <div className='title' onClick={() => navigate("/home")}>
                    <h1>electr</h1>
                    <img src="/electrObike_icono.png" />
                    <h1>bike</h1>
                </div>

                {admin_pages.map((admin_page, index) => (
                    <div key={index} className="admin-page" onClick={() => set_main_component(admin_page.component)}>
                        {admin_page.icon}
                        <p className='name'>{admin_page.name}</p>
                    </div>
                ))}

                <div className='exit-page' onClick={() => navigate("/home")}>
                    <ExitToAppIcon />
                    <p className='name'>Exit</p>
                </div>
            </div>
            <div className='main'>
                {loading ? <div className='spinner'>
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#2b2b2b"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </div> : null}
                {main_component}
            </div>
        </main>
    )
}
export default Admin
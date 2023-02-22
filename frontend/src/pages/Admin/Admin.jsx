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
import { useState } from 'react';

const Admin = () => {
    const [main_component, set_main_component] = useState(<Users />)
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

    return (
        <main className='root-admin'>
            <div className='nav'>
                <div className='title' navigate="/home">
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

                <div className='exit-page'>
                    <ExitToAppIcon />
                    <p className='name'>Exit</p>
                </div>
            </div>
            <div className='main'>
                {main_component}
            </div>
        </main>
    )
}
export default Admin
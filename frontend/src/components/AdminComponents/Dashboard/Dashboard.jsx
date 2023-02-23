import useAdminDashboard from "../../../hooks/useAdminDashboard"
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Station from '../../../assets/icons/Station';
import Slot from '../../../assets/icons/Slot';
import Bike from '../../../assets/icons/Bike'
import Bell from '../../../assets/icons/Bell';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import User from '../../../assets/icons/User';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function Dashboard() {

    const { bikes, clients, incidents, slots, stations, notifications, rents, users } = useAdminDashboard()

    const cards = [
        { number: bikes, nombre: "Bikes", icon: <Bike /> },
        { number: clients, nombre: "Clients", icon: <User /> },
        { number: incidents, nombre: "Incidents", icon: <AnnouncementIcon /> },
        { number: slots, nombre: "Slots", icon: <Slot /> },
        { number: stations, nombre: "Stations", icon: <Station /> },
        { number: rents, nombre: "Rents", icon: <ConfirmationNumberIcon /> },
        { number: notifications, nombre: "Notifications", icon: <Bell /> },
        { number: users, nombre: "Users", icon: <AdminPanelSettingsIcon /> },
    ]

    return (
        <>
            <div className="title">
                <h1>Dashboard</h1>
            </div>
            <div className="main-dashboard">
                <div className="container-cards-dashboard">
                    {
                        cards.map(({ number, nombre, icon }, index) => {
                            return (
                                <div className="card-dashboard" key={index}>
                                    <h1>{nombre}</h1>
                                    <div>
                                        {icon}
                                        <h2>{number}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

const CardDashboard = ({ number, nombre }) => {
    return (
        <div className="card-dashboard">
            <h2>{number}</h2>
            <p>{nombre}</p>
        </div>
    )
}


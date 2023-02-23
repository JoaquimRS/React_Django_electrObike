import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import "./Profile.scss";
import Loading from "../../components/loading";
import { useState } from "react";
import User from "./User";
import Reserves from "./Reserves";
import Incidents from "./Incidents";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const [page, setPage] = useState('/')

    const user = useSelector(state => state.auth.user)

    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    const handleMenu = () => {
        setPage('/')
    }

    return user ? (
        <div>
            <div className="profile-container">
                <div className="img-container">
                    <img src={user.avatar} alt="" />
                </div>
                <div className="sections">

                {
                    page !== '/' && <div className="button-back-menu" onClick={handleMenu} >
                        <ArrowBackIcon />
                    </div>
                }
                <PageSelected page={page} setPage={setPage}  />
                {
                    page === '/' && <button className="logout-button" onClick={handleLogout}>Logout</button>
                }
                </div>

            </div>
        </div>
    ) : <Loading />
}

const PageSelected = ({ page, setPage }) => {
    const isAdmin = useSelector(state => state.auth.admin)
    const pages = [
        {
            title: 'Perfil',
            path: '/user'
        },
        {
            title: 'Reservas',
            path: '/reservations'
        },
        {
            title: 'Incidencias',
            path: '/incidents'
        }
    ]
    isAdmin ? pages.push({title: 'AdminPanel',path:'admin'}) : null
    switch (page) {
        case '/user':
            return <User setPage={setPage}/>
        case '/reservations':
            return <Reserves />
        case '/incidents':
            return <Incidents />
        default:
            return (
                <>
                    {
                        pages.map((page, i) => {
                            return <PageSection key={i} title={page.title} path={page.path} setPage={setPage} />
                        })
                    }
                </>
            )
    }
}


const PageSection = ({ title, path, setPage }) => {
    const navigate = useNavigate()
    const hundleClick = () => {
        path == "admin" ? navigate("/admin") : setPage(path)
    }


    return (
        <div className="section-profile" onClick={hundleClick}>
            <div>{title}</div>
            <div><ArrowForwardIcon/></div>
        </div>
    )
}

export default Profile
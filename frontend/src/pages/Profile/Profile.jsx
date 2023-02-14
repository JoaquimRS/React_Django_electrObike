import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import "./Profile.scss";
import Loading from "../../components/loading";
import { useState } from "react";
import User from "./User";
import Reserves from "./Reserves";
import Incidents from "./Incidents";

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
                {
                    page !== '/' && <button onClick={handleMenu}>Menu</button>
                }
                <PageSelected page={page} setPage={setPage} />
                {
                    page === '/' && <button onClick={handleLogout}>Logout</button>
                }

            </div>
        </div>
    ) : <Loading />
}

const PageSelected = ({ page, setPage }) => {

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
    switch (page) {
        case '/user':
            return <User />
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

    const hundleClick = () => {
        setPage(path)
    }


    return (
        <div className="section-profile" onClick={hundleClick}>
            <div>{title}</div>
            <div>{'-->'}</div>
        </div>
    )
}

export default Profile
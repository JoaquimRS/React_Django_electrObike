import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import "./Profile.scss";
import Loading from "../../components/loading";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const user = useSelector(state => state.auth.user)

    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    const pages = [
        {
            title: 'Perfil',
            path: '/profile/user'
        },
        {
            title: 'Reservas',
            path: '/profile/reservations'
        },
        {
            title: 'Incidencias',
            path: '/profile/incidents'
        }
    ]

    return user ? (
        <div>
            <div className="profile-container">
                <div className="img-container">
                    <img src={user.avatar} alt="" />
                </div>
                {
                    pages.map((page, i) => {
                        return <PageSection key={i} title={page.title} path={page.path} />
                    })
                }
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    ) : <Loading />
}


const PageSection = ({ title, path }) => {

    const navigate = useNavigate()

    const hundleClick = () => {
        navigate(path)
    }


    return (
        <div className="section-profile" onClick={hundleClick}>
            <div>{title}</div>
            <div>{'-->'}</div>
        </div>
    )
}

export default Profile
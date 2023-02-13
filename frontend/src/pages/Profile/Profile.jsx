import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import "./Profile.scss";

const Profile = () => {

    const user = useSelector(state => state.auth.user)

    console.log(user);

    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <div className="profile-container">
                <div className="img-container">
                    <img src={user.avatar} alt="" />
                </div>
                <div className="section-profile">
                    <div>Perfil</div>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Profile
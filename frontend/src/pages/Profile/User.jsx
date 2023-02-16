import { useSelector } from "react-redux"
import "./Profile.scss";
import { FormControl, TextField } from "@mui/material";

export default function User() {
    const user = useSelector(state => state.auth.user)

    console.log(user);

    return (
        <div className="container-info-user">
            <h3>Perfil</h3>
            <TextField label='Nombre' defaultValue={user.name} disabled />
            <TextField label='Email' defaultValue={user.email} disabled />
            <TextField label='Telefono' defaultValue={user.phone} disabled />

        </div>
    )
}
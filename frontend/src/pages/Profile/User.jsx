import { useDispatch, useSelector } from "react-redux"
import "./Profile.scss";
import { FormControl, TextField } from "@mui/material";
import { useState } from "react";

export default function User() {
    const user = useSelector(state => state.auth.user)
    const [edit, setEdit] = useState(true)
    const dispatch = useDispatch()

    const handleEdit = () => {
        setEdit(false)
        dispatch({ type: 'SET_TOAST' })

    }

    const handleSave = () => {
        setEdit(true)
    }

    const textFildStyle = {
        width: '90%',
        marginBottom: '1rem'
    }

    return (
        <div className="container-info-user">
            <h3>Perfil</h3>
            <TextField sx={textFildStyle} label='Nombre' defaultValue={user.name} disabled={edit} />
            <TextField sx={textFildStyle} label='Email' defaultValue={user.email} disabled={edit} />
            <TextField sx={textFildStyle} label='Telefono' defaultValue={user.phone} disabled={edit} />

            <div className="container-buttons-user">
                {
                    edit
                        ? <button onClick={handleEdit}>Editar</button>
                        : <button onClick={handleSave}>Guardar</button>
                }
            </div>
        </div>
    )
}
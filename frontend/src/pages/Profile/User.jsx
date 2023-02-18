import { useDispatch, useSelector } from "react-redux"
import "./Profile.scss";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthService from "../../services/authService";

export default function User({ setPage }) {
    const user = useSelector(state => state.auth.user)
    const [edit, setEdit] = useState(true)
    const dispatch = useDispatch()

    const handleEdit = () => {
        setEdit(false)
        dispatch({ type: 'SET_TOAST' })

    }

    const { handleSubmit, register } = useForm()

    const handleSave = (user) => {
        AuthService.updateProfile(user).then(res => {
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'success',
                    message: res.body.msg,
                    show: true
                }
            });
            dispatch({
                type: 'SET_USER', payload: res.body.client
            });
        }).catch(err => {
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'error', message: err.response.body.detail, show: true
                }
            });
        })
        setEdit(true)
    }

    const handleCancel = () => {
        setPage('/')
    }

    const textFildStyle = {
        width: '90%',
        marginBottom: '1rem'
    }

    return (
        <div className="container-info-user">
            <h3>Perfil</h3>
            <form onSubmit={handleSubmit(handleSave)}>
                <TextField sx={textFildStyle} {...register('name', { required: true })} label='Nombre' defaultValue={user.name} disabled={edit} />
                <TextField sx={textFildStyle}  label='Email' defaultValue={user.email} disabled={true} />
                <TextField sx={textFildStyle} {...register('phone', { required: true })} label='Telefono' defaultValue={user.phone} disabled={edit} />
                {
                    !edit
                        ? <div className="container-buttons-user">
                            <button type="submit">Guardar</button>
                            <button onClick={handleCancel}>Cancelar</button>
                        </div>
                        : null
                }
            </form>
            <div className="container-buttons-user">
                {
                    edit
                        ? <button onClick={handleEdit}>Editar</button>
                        : null
                }
            </div>

        </div>
    )
}
import './Auth.scss'
import { TextField } from '@mui/material';
import { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import {InputProps, PasswdProps, InputStyle} from '../../components/Form/InputProps';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='main-auth-login'>
            <div className="container-login" >
                <h1>INICIAR SESIÓN</h1>
                <form onSubmit={handleSubmit(login)}>
                    <TextField type="email" name="email" placeholder="Email"
                        sx={{ ...InputStyle, width: '100%' }}
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            }
                        })}
                        InputProps={InputProps(MailOutlineIcon)}
                    />
                    {errors.email && errors.email.type === "pattern" && <span className="text-danger">Email no valido</span>}
                    {errors.email?.type === 'required' && <span className="text-danger">No has introducido email</span>}
                    <TextField type={showPassword ? "text" : "password"} name="password" placeholder="Password"
                        sx={InputStyle}
                        {...register("password", {
                            required: true,
                            minLength: 8
                        })}
                        InputProps={{ ...InputProps(LockIcon), ...PasswdProps(handleClickShowPassword, showPassword) }}
                    />
                    {errors.password && errors.password.type === "minLength" && <span className="text-danger">Un minimo de 8 caracteres</span>}
                    {errors.password?.type === 'required' && <span className="text-danger">No has introducido contraseña</span>}
                    <button type="submit">Login</button>
                    <NavLink to="/register">¿No tienes cuenta?</NavLink>
                </form>

            </div>
        </div>
    )

}

export default Login
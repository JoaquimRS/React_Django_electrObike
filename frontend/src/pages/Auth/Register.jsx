import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputProps, InputStyle, PasswdProps } from '../../components/Form/InputProps';
import './Auth.scss'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import useAuth from '../../hooks/useAuth';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { toRegister } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const password = useRef({});
    password.current = watch("password", "");

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="main-auth-register">
            <div className="container-register">
                <h1>REGISTRARSE</h1>
                <form onSubmit={handleSubmit(toRegister)}>
                    <TextField type="text" name="name" placeholder="Nombre"
                        sx={{ ...InputStyle, width: '100%' }}
                        {...register("name", {
                            required: true,
                            minLength: 3
                        })}
                        InputProps={InputProps(PersonIcon)}
                    />
                    {errors.name && errors.name.type === "minLength" && <span className="text-danger">Un minimo de 3 caracteres</span>}
                    {errors.name?.type === 'required' && <span className="text-danger">No has introducido nombre</span>}
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
                    <TextField type={showPassword ? "text" : "password"} name="password" placeholder="Repite password"
                        sx={{ ...InputStyle, width: '100%' }}
                        {...register("password2", {
                            required: true,
                            validate: value => value === password.current
                        })}
                        InputProps={{ ...InputProps(LockIcon) }}
                    />
                    {errors.password && errors.password.type === "minLength" && <span className="text-danger">Un minimo de 8 caracteres</span>}
                    {errors.password?.type === 'required' && <span className="text-danger">No has introducido contraseña</span>}
                    {errors.password2 && errors.password2.type === "validate" && <span className="text-danger">Las contraseñas no coinciden</span>}
                    <TextField type="text" name="phone" placeholder="Telefono"
                        sx={{ ...InputStyle, width: '100%' }}
                        {...register("phone", {
                            required: true,
                            minLength: 9
                        })}
                        InputProps={InputProps(PhoneIcon)}
                    />
                    {errors.phone && errors.phone.type === "minLength" && <span className="text-danger">Un minimo de 9 caracteres</span>}
                    {errors.phone?.type === 'required' && <span className="text-danger">No has introducido telefono</span>}
                    <button type='submit'>Register</button>
                    <NavLink to="/login">¿Ya tienes cuenta?</NavLink>
                </form>
            </div>
        </div>
    )
}

export default Register
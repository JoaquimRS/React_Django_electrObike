import './Login.scss'
import { Button, FormControl, IconButton, Input, InputAdornment, TextField } from '@mui/material';
import { useReducer, useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { login } = useAuth();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const inputProps = (Icon) => {
        return {
            startAdornment: (
                <InputAdornment position="start">
                    <Icon />
                </InputAdornment>
            ),
        }
    }

    const passwdProps = () => {
        return {
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            ),
        }
    }

    const imputStyle = {
        marginBottom: '25px',
        border: 'none',
        '& .MuiInputBase-root': {
            borderRadius: '30px',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            backgroundColor: '#FFF',
            '& .MuiInputBase-input': {
                padding: '10px 20px',
                fontSize: '16px',
            }
        }
    }

    return (
        <div className='main-login'>
            <div className="container-login" >
                <h1>INICIAR SESIÓN</h1>
                <form onSubmit={handleSubmit(login)}>
                    <TextField type="email" name="email" placeholder="Email"
                        sx={{ ...imputStyle, width: '100%' }}
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            }
                        })}
                        InputProps={inputProps(MailOutlineIcon)}
                    />
                    {errors.email && errors.email.type === "pattern" && <span className="text-danger">Email no valido</span>}
                    {errors.email?.type === 'required' && <span className="text-danger">No has introducido email</span>}
                    <TextField type={showPassword ? "text" : "password"} name="password" placeholder="Password"
                        sx={imputStyle}
                        {...register("password", {
                            required: true,
                            minLength: 8
                        })}
                        InputProps={{ ...inputProps(LockIcon,), ...passwdProps() }}
                    />
                    {errors.password && errors.password.type === "minLength" && <span className="text-danger">Un minimo de 8 caracteres</span>}
                    {errors.password?.type === 'required' && <span className="text-danger">No has introducido contraseña</span>}
                    <button type="submit">Login</button>
                </form>

            </div>
        </div>
    )

}

export default Login
import './Login.scss'
import { Button, FormControl, IconButton, Input, InputAdornment, TextField } from '@mui/material';
import { useReducer, useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const infoForm = useReducer((state, action) => {
        switch (action.type) {
            case 'email':
                return { ...state, email: action.value }
            case 'password':
                return { ...state, password: action.value }
            default:
                return state
        }
    }, {
        email: '',
        password: ''
    })

    const hundleSubmit = (e) => {
        e.preventDefault();

        console.log(infoForm[0]);
    }

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
        marginBottom: '30px',
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
                <form onSubmit={hundleSubmit}>
                    <TextField type="text" name="email" placeholder="Email"
                        sx={{ ...imputStyle, width: '100%' }}
                        InputProps={inputProps(MailOutlineIcon)}
                        onChange={(e) => infoForm[1]({ type: 'email', value: e.target.value })} />
                    <TextField type={showPassword ? "text" : "password"} name="password" placeholder="Password"
                        sx={imputStyle}
                        InputProps={{ ...inputProps(LockIcon,), ...passwdProps() }}
                        onChange={(e) => infoForm[1]({ type: 'password', value: e.target.value })} />
                    <button type="submit">Login</button>
                </form>

            </div>
        </div>
    )

}

export default Login
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { IconButton, InputAdornment } from "@mui/material"

const InputProps = (Icon) => {
    return {
        startAdornment: (
            <InputAdornment position="start">
                <Icon />
            </InputAdornment>
        ),
    }
}

const PasswdProps = (handleClickShowPassword, showPassword) => {
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

const InputStyle = {
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

export {InputProps, PasswdProps, InputStyle}
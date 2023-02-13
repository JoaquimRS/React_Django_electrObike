import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Toastr() {
    const dispatch = useDispatch();

    const toastr = useSelector(state => state.global.toastr);

    const handleClose = () => {
        dispatch({
            type: 'SET_TOASTR', payload: {
                type: toastr.type,
                message: '',
                show: false
            }
        });
    };

    return toastr.show ? (
        <Snackbar className='snackbar' open={toastr.show} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert className='alert' onClose={handleClose} severity={toastr.type}>
                {toastr.message}
            </Alert>
        </Snackbar>
    ) : null;
}
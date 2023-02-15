import { Dialog, Paper, Box, Button } from '@mui/material';
import { useState } from "react";
import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom';
import JWTService from '../../services/JWTService';
import { rentsService } from '../../services';
import { useDispatch } from 'react-redux';
import AuthService from '../../services/authService';

export default function SlotsItem({ slots }) {
    const orderSlots = [...slots].sort((a, b) => a.number - b.number)

    return (
        <div className="slots-container" >
            <div className='inside-slots-container'>
                <div className="slot">
                    <img src="src/assets/bikes/slot-half.png" alt="50px" />
                </div>
                {
                    orderSlots.map((slot, i) => {
                        return <BikeSlot
                            key={i}
                            slot={slot}
                        />
                    })
                }
                <div className='slot last-slot'>
                    <img src="src/assets/bikes/slot-half.png" alt="50px" />
                </div>
            </div>
        </div>
    )
}

function BikeSlot({ slot }) {
    const [confirmDialog, setConfirm] = useState(false)

    const handleClose = () => {
        setConfirm(false)
    }
    const handleClick = () => {
        setConfirm(true)
    }
    return (
        <div className='slot'>
            {
                slot.bike_id
                    ? <img src="src/assets/bikes/slot-bike.png" onClick={handleClick} alt="50px" />
                    : <img src="src/assets/bikes/slot-free.png" alt="50px" />
            }
            <span>{slot.number}</span>
            {
                slot.bike_id
                    ? <ConfirmDialog confirmDialog={confirmDialog} handleClose={handleClose} bike={slot.bike} />
                    : null
            }
        </div>
    )
}

const ConfirmDialog = ({ confirmDialog, handleClose, bike }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleReserve = () => {

        if (!JWTService.getToken()) return navigate("/login")

        rentsService.reserveBike(bike.id_bike).then(res => {
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'success',
                    message: "Has reservado la Bici " + bike.bike_plate,
                    show: true
                }
            })
            AuthService.getProfile().then(res => {
                dispatch({ type: "SET_USER", payload: res.body })
            })
        }).catch(err => {
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'error',
                    message: err.response.body.detail,
                    show: true
                }
            })
        })
    }

    return (
        <Dialog
            open={confirmDialog}
            onClose={() => handleClose()}
        >
            <Box className='confirm-dialog'>
                <p>¿Quieres reservar la bici <strong>{bike.bike_plate}</strong>?</p>
                <div style={{ width: 200, height: 200 }}>
                    <img src="../../src/assets/bikes/84149-bike.gif" alt="" width={'100%'} />
                </div>
                <div className='button-container'>
                    <Button variant="outlined" color="primary" onClick={() => handleReserve()}>Reservar</Button>
                    <Button variant="outlined" color="error" onClick={() => handleClose()}>Cancelar</Button>
                </div>
            </Box>
        </Dialog>
    )
}
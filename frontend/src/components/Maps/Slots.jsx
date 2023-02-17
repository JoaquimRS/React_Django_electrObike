import { Dialog, Paper, Box, Button } from '@mui/material';
import { useEffect, useState } from "react";
import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom';
import JWTService from '../../services/JWTService';
import { rentsService } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
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
    const [confirmSlotDialog, setSlotDialog] = useState(false)
    const authClient = useSelector(state => state.auth.user)
    const [client, setClient] = useState(null)

    useEffect(() => {
        setClient(authClient)
    }, [authClient])

    const handleClose = () => {
        setConfirm(false)
    }
    const handleClick = () => {
        setConfirm(true)
    }

    const handleSlotClose = () => {
        setSlotDialog(false)
    }

    const reserveSlot = () => {
        client.rents.filter(rent => rent.status == 2).length ? setSlotDialog(true) : null
    }

    return (
        <div className={client ? (slot.bike_id ? (client.has_rent ? 'slot no-auth' : 'slot') : 'slot') : 'slot'}>
            {
                slot.bike_id
                    ? <img src="src/assets/bikes/slot-bike.png" onClick={handleClick} alt="50px" />
                    : <img src="src/assets/bikes/slot-free.png" alt="50px" onClick={client ? (client.has_rent ? reserveSlot : null) : null}/>
            }
            <span>{slot.number}</span>
            {
                slot.bike_id
                    ? <BikeDialog confirmDialog={confirmDialog} handleClose={handleClose} bike={slot.bike} />
                    : null
                
            }
            {
                client
                ? <SlotDialog confirmDialog={confirmSlotDialog} handleClose={handleSlotClose} slot={slot}/>
                : null
            }
        </div>
    )
}

const BikeDialog = ({ confirmDialog, handleClose, bike }) => {

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

const SlotDialog = ({ confirmDialog, handleClose, slot }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleReserve = () => {

        if (!JWTService.getToken()) return navigate("/login")

        rentsService.leaveSlot(slot.id_slot).then(res => {
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'success',
                    message: "Has reservado el Slot " + slot.number,
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
                <p>¿Quieres reservar el Slot <strong>{slot.number}</strong>?</p>
                <div className="slot-free-container">
                    <img className="slot-free" src="src/assets/bikes/slot-half.png" alt="" />
                    <img className="slot-free" src="src/assets/bikes/slot-free.png" alt="" />
                    <img className="slot-free last-slot" src="src/assets/bikes/slot-half.png" alt="" />
                    <span>{slot.number}</span>
                </div>
                <div className='button-container'>
                    <Button variant="outlined" color="primary" onClick={() => handleReserve()}>Reservar</Button>
                    <Button variant="outlined" color="error" onClick={() => handleClose()}>Cancelar</Button>
                </div>
            </Box>
        </Dialog>
    )
}
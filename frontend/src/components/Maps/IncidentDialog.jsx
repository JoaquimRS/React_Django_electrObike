import { Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import Textarea from '@mui/joy/Textarea';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useIncident from "../../hooks/useIncident";



const IncidentDialog = ({ open, handleModal, item }) => {

    const user = useSelector(state => state.auth.user)
    const navigate = useNavigate()
    const [type, setType] = useState('')
    const [id_type, setIdType] = useState('')
    const [description, setDescription] = useState('')
    const { saveIncident } = useIncident()
    const dispatch = useDispatch()

    const station = {
        id_station: item.id_station,
        name: item.name,
        img: item.img,
        lat: item.lat,
        long: item.lng,
        slug: item.slug,
    }
    const slots = item.slots
    const bike = item.slots.filter(slot => {
        if (slot.bike !== null) return slot.bike
    })

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const closeDialog = () => {
        handleModal()
        setType('')
    }

    const handleChangeIdType = (event) => {
        setIdType(event.target.value);
    };

    const handleSend = () => {
        if (!user) {
            navigate('/login')
        }

        if (!description || !type || !id_type) {
            dispatch({
                type: 'SET_TOASTR', payload: {
                    type: 'error',
                    message: 'Rellena todos los campos',
                    show: true
                }
            })
            return
        }

        let item = {
            type,
            description: description,
            state: 1
        }
        if (type === 'station') {
            item.id_type = station.id_station
        } else {
            item.id_type = id_type
        }
        saveIncident(item)
        console.log(item)
    }


    return (
        <Dialog
            open={open}
            onClose={closeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className="main-incidencia">
                <h1>Incidencias</h1>
                <div style={{
                    minWidth: 250,
                    minHeight: 300,
                }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Tipo"
                            onChange={handleChange}
                        >
                            <MenuItem value="bike">Bike</MenuItem>
                            <MenuItem value="slot">Slot</MenuItem>
                            <MenuItem value="station">Station</MenuItem>
                        </Select>
                    </FormControl>
                    <div style={{ marginTop: '15px' }}>
                        {
                            type ? type !== 'station' ? (
                                <div>
                                    <h3>Elige la {type === "bike" ? "bicicleta" : "Slot"}</h3>
                                    <div>
                                        <FormControl fullWidth >
                                            <InputLabel id="demo-simple-select-label">{type === "bike" ? "Bike" : type === "slot" ? "Slot" : "Station"}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label={type === "bike" ? "Bike" : type === "slot" ? "Slot" : "Station"}
                                                onChange={handleChangeIdType}
                                            >
                                                {
                                                    type === "bike" && bike.map((bike, index) => (
                                                        <MenuItem key={bike.bike.id_bike} value={bike.bike.id_bike}>{bike.bike.bike_plate}</MenuItem>
                                                    ))
                                                }
                                                {
                                                    type === "slot" && slots.map((slot, index) => (
                                                        <MenuItem key={slot.number} value={slot.id_slot}>{slot.number}</MenuItem>
                                                    ))
                                                }

                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h3>La estación:</h3>
                                    <TextField fullWidth id="outlined-basic" label="Estación" disabled variant="outlined" value={station.name} />
                                </div>
                            )
                                : null
                        }

                        {
                            type && (
                                <div>
                                    <div>
                                        <h3>Cuentanos que ha pasado</h3>
                                        <Textarea minRows={5} onChange={(e) => setDescription(e.target.value)} />
                                    </div>
                                    <div className="button-send-incidence">
                                        <button onClick={handleSend} className="btn btn-primary">Enviar</button>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default IncidentDialog
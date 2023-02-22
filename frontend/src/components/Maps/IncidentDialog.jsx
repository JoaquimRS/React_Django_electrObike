import { Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import Textarea from '@mui/joy/Textarea';



const IncidentDialog = ({ open, handleModal, item }) => {

    const [type, setType] = useState('')
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


    const info = () => {
        type !== 'station' ? (
            <div>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">{type === "bike" ? "Bike" : type === "slot" ? "Slot" : "Station"}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={type === "bike" ? "Bike" : type === "slot" ? "Slot" : "Station"}
                    // onChange={handleChange}
                    >
                        {
                            type === "bike" && bike.map((bike, index) => (
                                <MenuItem key={index} value={bike.bike.id_bike}>{bike.bike.bike_plate}</MenuItem>
                            ))
                        }
                        {
                            type === "slot" && slots.map((slot, index) => (
                                <MenuItem key={index} value={slot.id_slot}>{slot.number}</MenuItem>
                            ))
                        }

                    </Select>
                </FormControl>
            </div>
        ) : <TextField fullWidth id="outlined-basic" label="Estación" disabled variant="outlined" value={station.name} />
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
                                            // onChange={handleChange}
                                            >
                                                {
                                                    type === "bike" && bike.map((bike, index) => (
                                                        <MenuItem key={index} value={bike.bike.id_bike}>{bike.bike.bike_plate}</MenuItem>
                                                    ))
                                                }
                                                {
                                                    type === "slot" && slots.map((slot, index) => (
                                                        <MenuItem key={index} value={slot.id_slot}>{slot.number}</MenuItem>
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
                                        <Textarea minRows={5} />
                                    </div>
                                    <div className="button-send-incidence">
                                        <button className="btn btn-primary">Enviar</button>
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
import { Dialog } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import SlotsItem from "./Slots";
import { useState } from "react";
import IncidentDialog from "./IncidentDialog";

export default function ElectroDialog({ open, handleModal, item, slots }) {

    const [openIncidents, setOpenIncidents] = useState(false);
    const handleOpenIncidents = () => {
        setOpenIncidents(old => !old)
    }

    return (
        <Dialog
            open={open}
            onClose={() => handleModal()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {openIncidents && <IncidentDialog open={openIncidents} handleModal={handleOpenIncidents} item={item} />}
            <div className='container-dialog' >
                <div className="button-more">
                    <IconButton size="large" onClick={handleOpenIncidents}>
                        <MoreHorizIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <div className="dialog-title">
                    <div>
                        <img src={item.img} alt="Imagen" />
                    </div>
                    <h2>
                        {item.name}
                    </h2>
                </div>
                <Box sx={{
                    maxHeight: '380px',
                    overflow: 'auto',
                }}
                >
                    {slots.length !== 0 ? (<div className="slots-main">
                        <SlotsItem slots={slots} handleModal={handleModal} />
                    </div>) : <div>No hay slots disponibles disculpe la molestias</div>}
                </Box>


                <div className="dialog-footer">
                    <Button variant="outlined" color="primary" onClick={() => handleModal()}>
                        Cerrar
                    </Button>
                </div>

            </div>
        </Dialog>
    )
}

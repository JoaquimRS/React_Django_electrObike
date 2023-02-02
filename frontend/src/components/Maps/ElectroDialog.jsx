import { Dialog } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import SlotsItem from "./Slots";

export default function ElectroDialog({ open, handleModal, item, slots }) {

    return (
        <Dialog
            open={open}
            onClose={() => handleModal()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className='container-dialog'>
                <div className="button-more">
                    <IconButton size="large">
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
                }}>
                    {slots.length !== 0 ? (<div className="slots-main">
                        <SlotsItem slots={slots} />
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
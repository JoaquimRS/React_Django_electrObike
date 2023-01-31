import { Dialog } from "@mui/material";

export default function Electrodialog({ open, handleOpen, item }) {

    console.log(item);

    return (
        <Dialog
            open={open}
            onClose={() => handleOpen()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className='container-dialog' style={{
                width: '82vw',
                height: '90vh',
            }}>

                {item.name}
            </div>
        </Dialog>
    )
}
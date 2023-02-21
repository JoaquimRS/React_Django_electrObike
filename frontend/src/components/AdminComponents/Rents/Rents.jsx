import useAdminRents from "../../../hooks/useAdminRents"
import {AdminTable} from ".."
import useAdminClients from "../../../hooks/useAdminClients"
import useAdminBikes from "../../../hooks/useAdminBikes"
import useAdminSlots from "../../../hooks/useAdminSlots"

export default function Rents() {
    const clients = useAdminClients()
    let client_id_options = []
    clients.map((client) => client_id_options.push({name:client.email,val:client.id_client}))
    const bikes = useAdminBikes()
    let bike_id_options = []
    bikes.map((bike) => bike_id_options.push({name:bike.bike_plate,val:bike.id_bike}))
    const slots = useAdminSlots()
    let slots_id_options = []
    slots.map((slot) => slots_id_options.push({name:slot.number,val:slot.id_slot}))

    const columns = [
        { name: "id_rent", edit: false },
        { name: "client_id", edit: false, type: "options", options: client_id_options},
        { name: "bike_id", edit: false, type: "options", options: bike_id_options},
        { name: "status", edit: false},
        { name: "get_slot_id", edit: false, type: "options", options: slots_id_options},
        { name: "leave_slot_id", edit: false, type: "options", options: slots_id_options},
        { name: "get_at", edit: false},
        { name: "leave_at", edit: false},
        { name: "kms", edit: false}
    ]
    const rents = useAdminRents()

    return (
        <>
            <div className="title">
                <h1>Rents</h1>
            </div>
            <div className="container">
                <AdminTable columns={columns} c_data={rents} entity="Rents" updateEntity={false} addEntity={false} />
            </div>
        </>
    )
}
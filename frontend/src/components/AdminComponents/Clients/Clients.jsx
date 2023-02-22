import { AdminTable } from ".."
import useAdminClients from "../../../hooks/useAdminClients"

export default function Clients() {
    const columns = [
        {name: 'id_client', edit: false},
        {name: 'name', edit: false},
        {name: 'email', edit: false},
        {name: 'password', edit: false, type:"password"},
        {name: 'phone', edit: false},
        {name: 'avatar', edit: false},
    ]

    const clients = useAdminClients()
    return (
        <>
            <div className="title">
                <h1>Clients</h1>
            </div>
            <div className="container">
                <AdminTable columns={columns} c_data={clients} entity="Clients" addEntity={false} updateEntity={false}/>
            </div>
        </>
    )
}
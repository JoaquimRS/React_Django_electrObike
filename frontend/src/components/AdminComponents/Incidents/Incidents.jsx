import { AdminTable } from "..";
import useAdminClients from "../../../hooks/useAdminClients";
import useAdminIncidents from "../../../hooks/useAdminIncidents";

export default function Incidents() {
    const clients = useAdminClients()
    let client_id_options = []
    clients.map((client) => client_id_options.push({name:client.email,val:client.id_client}))
    let type_options = [
        {name: "Bici", val:"bike"},
        {name: "Slot", val:"slot"},
        {name: "Station", val:"station"}
    ]
    let state_options = [
        {name: "🔴", val: "1"},
        {name: "🟡", val: "2"},
        {name: "🟢", val: "3"}
    ]
    const columns = [
        { name: "id_incident", edit: false },
        { name: "id_client", edit: true, type: "options", options:client_id_options, require: true },
        { name: "type", edit: true, type: "options", options:type_options, require: true },
        { name: "id_type", edit: true, type: "text", require: true },
        { name: "description", edit: true, type: "text", require: true },
        { name: "state", edit: true, type: "options", options: state_options, require: true },
    ]
    const incidents = useAdminIncidents()

    return (
        <>
            <div className="title">
                <h1>Incidents</h1>
            </div>
            <div className="container">
                <AdminTable columns={columns} c_data={incidents} entity="Incidents" />
            </div>
        </>
    )
}
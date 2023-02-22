import { AdminTable } from "..";
import useAdminIncidents from "../../../hooks/useAdminIncidents";

export default function Incidents() {

    const columns = [
        { name: "id_incident", edit: false },
        { name: "id_client", edit: true, type: "text", require: true },
        { name: "type", edit: true, type: "text", require: true },
        { name: "id_type", edit: true, type: "text", require: true },
        { name: "description", edit: true, type: "text", require: true },
        { name: "state", edit: true, type: "text", require: true },
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
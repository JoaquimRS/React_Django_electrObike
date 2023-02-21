import { AdminTable } from ".."
import useAdminClients from "../../../hooks/useAdminClients"
import useAdminNotifications from "../../../hooks/useAdminNotifications"

export default function Notifications() {
    const clients = useAdminClients()
    let client_options = []
    clients.map((client) => {client_options.push({name:client.email,val:client.id_client})})
    const columns = [
        { name: 'id_notification', edit: false },
        { name: 'client', edit: true, type: "options", options: client_options, require: false },
        { name: 'expiration', edit: true, type: "datetime-local", require: true },
        { name: 'img', edit: true, type: "text", require: false },
        { name: 'title', edit: true, type: "text", require: true },
        { name: 'description', edit: true, type: "text", require: true }
    ]
    const notifications = useAdminNotifications()

    // TODO: NOt allow to edit the notifications

    return (
        <>
            <div className="title">
                <h1>Notifications</h1>
            </div>
            <div className="container">
                <AdminTable columns={columns} c_data={notifications} entity="Notifications" />
            </div>
        </>
    )
}
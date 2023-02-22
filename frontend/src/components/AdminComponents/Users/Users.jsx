import { AdminTable } from ".."
import useAdminUsers from "../../../hooks/useAdminUsers"
export default function Users() {
    let role_options = [
        {name:"Administrador", val:"ADMIN"},
        {name:"Encargado", val:"MANAGER"},
        {name:"Empleado", val:"EMPLOYEE"}
    ]
    const columns = [
        {name:"id_user", edit:false},
        {name:"name", edit:true, type:"text"},
        {name:"email", edit:true, type:"text"},
        {name:"password", edit:true, type:"password"},
        {name:"role", edit:true, type:"options", options: role_options},

    ]
    const users = useAdminUsers()
    return (
        <>
            <div className="title">
                <h1>Users</h1>
            </div>
            <div className="container">
                <AdminTable columns={columns} c_data={users} entity="Users" />
            </div>
        </>
    )
}
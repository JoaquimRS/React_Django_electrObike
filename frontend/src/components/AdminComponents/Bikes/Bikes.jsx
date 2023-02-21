import useAdminBikes from "../../../hooks/useAdminBikes";
import { AdminTable } from "..";

export default function Bikes() {
    const columns = [
        { name: "id_bike", edit: false },
        { name: "slug", edit: false },
        { name: "bike_plate", edit: true, type: "text", require: true },
    ]
    const bikes = useAdminBikes()

    return (
        <>
            <div className="title">
                <h1>Bikes</h1>
            </div>
            <div className="container">
                <AdminTable columns={columns} c_data={bikes} entity="Bikes" updateEntity={true} />
            </div>
        </>
    )
}
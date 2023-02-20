import { AdminTable } from ".."

export default function Slots() {
    const columns = [
        { name: "id_slot", edit: false },
        { name: "number", edit: false },
        { name: "station_id", edit: true, type: "text", require: true },
        { name: "bike_id", edit: false },
    ]
    return (
        <>
            <div className="title">
                <h1>Slots</h1>
            </div>
            {/* <div className="container">
                <AdminTable columns={columns} entity="Slots" />
            </div> */}
        </>
    )
}
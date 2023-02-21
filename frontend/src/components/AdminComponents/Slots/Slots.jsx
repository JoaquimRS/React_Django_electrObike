import { AdminTable } from ".."
import useAdminSlots from "../../../hooks/useAdminSlots"
import useAdminStations from "../../../hooks/useAdminStations"
import useAdminBikes from "../../../hooks/useAdminBikes"
import { useEffect } from "react"

export default function Slots() {
    const stations = useAdminStations()
    const bikes = useAdminBikes()
    let station_id_options = []
    stations.map((station) => {station_id_options.push({name:station.name,val:station.id_station})})
    let bike_id_options = []
    bikes.map((bike) => {bike_id_options.push({name:bike.bike_plate,val:bike.id_bike})})

    const columns = [
        { name: "id_slot", edit: false },
        { name: "number", edit: false },
        { name: "station_id", edit: true, type: "options", options: station_id_options, require: true },
        { name: "bike_id", edit: true, type: "options", options: bike_id_options, require: false},
    ]
    
    const slots = useAdminSlots()
    return (
        <>
            <div className="title">
                <h1>Slots</h1>
            </div>
            <div className="container">
                <AdminTable columns={columns} c_data={slots} entity="Slots" />
            </div>
        </>
    )
}
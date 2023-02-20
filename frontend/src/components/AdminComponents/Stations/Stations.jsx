import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AdminTable } from "..";
import useAdminStations from "../../../hooks/useAdminStations";

export default function Stations() {

    const columns = [
        { name: "id_station", edit: false },
        { name: "slug", edit: false },
        { name: "number", edit: false },
        { name: "name", edit: true, type: "text", require: true },
        { name: "lat", edit: true, type: "number", step: "0.000001", require: true },
        { name: "long", edit: true, type: "number", step: "0.000001", require: true },
        { name: "img", edit: true, type: "text", require: true },
    ]
    const stations = useAdminStations()

    return (
        <>
            <div className="title">
                <h1>Stations</h1>
            </div>
            <div className="container">
                <AdminTable columns={columns} c_data={stations} entity="Stations" />
            </div>
        </>
    )
}
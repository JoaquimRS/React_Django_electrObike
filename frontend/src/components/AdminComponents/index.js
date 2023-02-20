import { lazy } from 'react'
const Dashboard = lazy(() => import("./Dashboard/Dashboard"))
const Stations = lazy(() => import("./Stations/Stations"));
const Slots = lazy(() => import("./Slots/Slots"));
const Bikes = lazy(() => import("./Bikes/Bikes"));
const Notifications = lazy(() => import("./Notifications/Notifications"))
const Incidents = lazy(() => import("./Incidents/Incidents"))
const Rents = lazy(() => import("./Incidents/Incidents"))
const Clients = lazy(() => import("./Clients/Clients"))
const Users = lazy(() => import("./Users/Users"))
const AdminTable = lazy(() => import("./AdminTable/AdminTable"))
export {
    Dashboard,
    Stations,
    Slots,
    Bikes,
    Notifications,
    Incidents,
    Rents,
    Clients,
    Users,
    AdminTable
}
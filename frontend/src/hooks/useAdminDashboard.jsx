import { useEffect, useState } from "react";
import { bikesService, clientsService, incidentsService, slotsService, usersService, stationsService, rentsService, notificationsService } from "../services";

export default function useAdminDashboard() {

    const [bikes, setBikes] = useState(0)
    const [clients, setClients] = useState(0)
    const [incidents, setIncidents] = useState(0)
    const [slots, setSlots] = useState(0)
    const [stations, setStations] = useState(0)
    const [rents, setRents] = useState(0)
    const [notifications, setNotifications] = useState(0)
    const [users, setUsers] = useState(0)

    useEffect(() => {
        bikesService.getBikes().then((res) => {
            setBikes(res.body.length)
        })
    }, [])

    useEffect(() => {
        clientsService.getClients().then((res) => {
            setClients(res.body.length)
        })
    }, [])

    useEffect(() => {
        incidentsService.getIncidents().then((res) => {
            setIncidents(res.body.length)
        })
    }, [])

    useEffect(() => {
        slotsService.getSlots().then((res) => {
            setSlots(res.body.length)
        })
    }, [])

    useEffect(() => {
        stationsService.getStations().then((res) => {
            setStations(res.body.length)
        })
    }, [])

    useEffect(() => {
        rentsService.getRents().then((res) => {
            setRents(res.body.length)
        })
    }, [])

    useEffect(() => {
        notificationsService.getNotifications().then((res) => {
            setNotifications(res.body.length)
        })
    }, [])

    useEffect(() => {
        usersService.getUsers().then((res) => {
            setUsers(res.body.length)
        })
    }, [])



    return { bikes, clients, incidents, slots, stations, rents, notifications, users }
}   

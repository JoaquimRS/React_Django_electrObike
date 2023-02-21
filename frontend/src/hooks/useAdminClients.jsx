import { useEffect, useState } from "react";
import { clientsService } from "../services";

export default function useAdminClients() {
    const [clients, setClients] = useState([])
    useEffect(() => {
        clientsService.getClients().then((res) => {
            setClients(res.body)
        })
    }, [])
    return clients
}

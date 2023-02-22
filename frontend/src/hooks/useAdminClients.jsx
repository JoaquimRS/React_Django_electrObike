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

export function useDeleteClients(client) {
    return new Promise((resolve, reject) => {
        clientsService.deleteClients(client.id_client)
          .then((res) => {
              resolve(res.body);
          })
          .catch((err) => {
              reject(err);
          });
      });
}

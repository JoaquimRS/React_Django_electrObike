import { useEffect, useState } from "react";
import { rentsService } from "../services";

export default function useAdminRents() {
    const [rents, setRents] = useState([])
    useEffect(() => {
        rentsService.getRents().then((res) => {
            setRents(res.body)
        })
    }, [])
    return rents
}

export function useDeleteRents(rent) {
    return new Promise((resolve, reject) => {
        rentsService.deleteRents(rent.id_rent)
          .then((res) => {
              resolve(res.body);
          })
          .catch((err) => {
              reject(err);
          });
      });
}
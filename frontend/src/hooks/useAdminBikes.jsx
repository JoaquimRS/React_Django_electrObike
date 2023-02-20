import { useEffect, useState } from "react";
import { bikesService } from "../services";


export default function useAdminBikes() {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        bikesService.getBikes().then((res) => {
            setBikes(res.body)
        })
    }, [])
    return bikes
}

export function useDeleteBikes(bike) {
    return new Promise((resolve, reject) => {
        bikesService.deleteBikes(bike.id_bike)
          .then((res) => {
              resolve(res.body);
          })
          .catch((err) => {
              reject(err);
          });
      });
}

export function useCreateBikes(bike) {
    return new Promise((resolve, reject) => {
        bikesService.addBikes(bike)
          .then((res) => {
              resolve(res.body);
          })
          .catch((err) => {
              reject(err);
          });
      });
}

export function useUpdateBikes(bike, rowBike) {
    return new Promise((resolve, reject) => {
        bikesService.updateBikes(rowBike.id_bike, bike)
          .then((res) => {
              resolve(res.body);
          })
          .catch((err) => {
              reject(err);
          });
      });
}
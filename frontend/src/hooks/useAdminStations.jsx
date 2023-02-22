import { useEffect, useState } from "react";
import { stationsService } from "../services";

export default function useAdminStations() {
    const [stations, setStations] = useState([])
    useEffect(() => {
        stationsService.getStations().then((res) => {
            setStations(res.body)
        })
    }, [])
    return stations
}

// Important to use entity = 'Stations' calling the AdminTable
export function useDeleteStations(station) {
    return new Promise((resolve, reject) => {
        stationsService.deleteStations(station.id_station)
          .then((res) => {
              resolve(res.body);
          })
          .catch((err) => {
              reject(err);
          });
      });
}

export function useCreateStations(station) {
    return new Promise((resolve, reject) => {
      stationsService.addStations(station)
        .then((res) => {
            resolve(res.body);
        })
        .catch((err) => {
            reject(err);
        });
    });
}
  
  

export function useUpdateStations(station, rowStation) {
    return new Promise((resolve,reject) => {
        stationsService.updateStations(rowStation.id_station, station)
            .then((res) => {
                resolve(res.body)
            })
            .catch((err) => {
                reject(err);
            })
    })
}
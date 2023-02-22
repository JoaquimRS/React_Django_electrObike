import { useEffect, useState } from "react";
import { incidentsService } from "../services";

export default function useAdminIncidents() {
    const [incidents, setIncidents] = useState([])
    useEffect(() => {
        incidentsService.getIncidents().then((res) => {
            setIncidents(res.body)
        })
    }, [])
    return incidents
}

// Important to use entity = 'incidents' calling the AdminTable
export function useDeleteIncidents(incident) {
    return new Promise((resolve, reject) => {
        incidentsService.deleteIncidents(incident.id_incident)
            .then((res) => {
                resolve(res.body);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function useCreateIncidents(incident) {
    return new Promise((resolve, reject) => {
        incidentsService.addIncidents(incident)
            .then((res) => {
                resolve(res.body);
            })
            .catch((err) => {
                reject(err);
            });
    });
}



export function useUpdateIncidents(incident, rowincident) {
    return new Promise((resolve, reject) => {
        incidentsService.updateIncidents(rowincident.id_incident, incident)
            .then((res) => {
                resolve(res.body)
            })
            .catch((err) => {
                reject(err);
            })
    })
}
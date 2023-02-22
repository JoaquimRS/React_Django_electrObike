import { useState, useEffect } from 'react'
import { incidentService } from '../services'
import { useDispatch } from 'react-redux'

export default function useIncident() {
    const dispatch = useDispatch()

    const showToastr = useCallback((type, message) => {
        dispatch({
            type: 'SET_TOASTR', payload: {
                type: type,
                message: message,
                show: true
            }
        });
    }, [])

    const saveIncident = (incident) => {
        incidentService.newIncident(incident).then((res) => {
            showToastr('success', 'Incidente creado correctamente')
        }).catch((err) => {
            showToastr('error', 'Error al crear el incidente')
        })
    }

    return { saveIncident }
}
import { useState, useEffect, useCallback } from 'react'
import { incidentsService } from '../services'
import { useDispatch } from 'react-redux'
import authService from '../services/authService'

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
        authService.getProfile().then(res => {
            console.log(res.body);
            dispatch({ type: "SET_USER", payload: res.body })
        })
    }, [])

    const saveIncident = (incident) => {
        incidentsService.newIncident(incident).then((res) => {
            showToastr('success', 'Incidente creado correctamente')
        }).catch((err) => {
            showToastr('error', 'Error al crear el incidente')
        })
    }

    return { saveIncident }
}
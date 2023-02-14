import { useState, useEffect } from 'react'
import { stationsService } from '../services'
import { useDispatch } from 'react-redux'

export default function useStations() {
    const dispatch = useDispatch()
    useEffect(() => {
        stationsService.getStations().then((res) => {
            dispatch({ type: 'SET_STATIONS', payload: res.body })
        })
    }, [])
    return null
}
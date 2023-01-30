import { useState, useEffect } from 'react'
import { stations_service } from '../services'

export default function useStations() {
    const [stations, setStations] = useState([])
    useEffect(() => {
        stations_service.getStations().then((res) => {
            setStations(res.body)
        })
    }, [])
    return { stations }
}
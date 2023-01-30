import { useState, useEffect } from 'react'
import { stations_service } from '../services'
import { useDispatch } from 'react-redux'
import { setStationsStore } from '../store/Reducers/stationsReducer'

export default function useStations() {
    const [stations, setStations] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        stations_service.getStations().then((res) => {
            dispatch(setStationsStore(res.body))
            setStations(res.body)
        })
    }, [])
    return { stations }
}
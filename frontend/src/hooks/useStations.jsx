import { useState, useEffect } from 'react'
import { stationsService } from '../services'
import { useDispatch } from 'react-redux'
import { setStationsStore } from '../store/Reducers/stationsReducer'

export default function useStations() {
    const [stations, setStations] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        stationsService.getStations().then((res) => {
            dispatch(setStationsStore(res.body))
            setStations(res.body)
        })
    }, [])
    return { stations }
}
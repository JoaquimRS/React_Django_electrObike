import { useEffect, useState } from "react";
import { slotsService } from "../services";


export default function useAdminSlots() {
    const [slots, setSlots] = useState([])
    useEffect(() => {
        slotsService.getSlots().then((res) => {
            setSlots(res.body)
        })
    }, [])
    return slots
}
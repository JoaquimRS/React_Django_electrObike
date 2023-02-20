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
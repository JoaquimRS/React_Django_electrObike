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

export function useDeleteSlots(slot) {
    return new Promise((resolve, reject) => {
        slotsService.deleteSlots(slot.id_slot)
            .then((res) => {
                resolve(res.body)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


export function useCreateSlots(slot) {
    return new Promise((resolve, reject) => {
        slotsService.addSlots(slot)
            .then((res) => {
                resolve(res.body)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export function useUpdateSlots(slot, rowSlot) {
    return new Promise((resolve,reject) => {
        slotsService.updateSlots(rowSlot.id_slot, slot)
            .then((res) => {
                resolve(res.body)
            })
            .catch((err) => {
                reject(err);
            })
    })
}
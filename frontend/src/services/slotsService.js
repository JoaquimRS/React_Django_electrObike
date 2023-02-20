import response from "./Api";

export default {
    getSlots() {
        return response.get('/slots')
    },
    addSlots(newSlot) {
        return response.post('/slots/create', newSlot)
    },
    deleteSlots(idSlot) {
        return response.del(`/slots/delete/${idSlot}`)
    }

}
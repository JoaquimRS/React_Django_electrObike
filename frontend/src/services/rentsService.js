import response from "./Api";

export default {
    reserveBike(idBike) {
        return response.get(`/rents/reserve/bike/${idBike}`)
    },
    rentBike(slugBike) {
        return response.get(`/rents/rent/bike/${slugBike}`)
    },
    leaveSlot() {
        return response.get()
    },
    leaveBike() {
        return response.get()
    }


}
import response from "./Api";

export default {
    reserveBike(idBike) {
        return response.get(`/rents/reserve/bike/${idBike}`)
    },
    rentBike(slugBike) {
        return response.get(`/rents/rent/bike/${slugBike}`)
    },
    leaveSlot(idSlot) {
        return response.get(`/rents/leave/slot/${idSlot}`)
    },
    leaveBike(slugBike) {
        return response.get(`/rents/leave/bike/${slugBike}`)
    },
    getRents() {
        return response.get('/rents')
    },
    deleteRents(idRent) {
        return response.del(`/rents/delete/${idRent}`)
    }
}
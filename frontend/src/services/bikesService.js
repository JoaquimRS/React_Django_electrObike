import response from "./Api";

export default {
    getBikes() {
        return response.get('/bikes')
    },
    addBikes(newBike) {
        return response.post('/bikes/create', newBike)
    },
    deleteBikes(idBike) {
        return response.del(`/bikes/delete/${idBike}`)
    },
    updateBikes(idBike, modBike) {
        return response.put(`/bikes/update/${idBike}`, modBike)
    },
}
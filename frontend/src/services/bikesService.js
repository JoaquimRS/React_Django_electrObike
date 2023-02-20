import response from "./Api";

export default {
    getBikes() {
        return response.get('/bikes')
    }
}
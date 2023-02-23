import _superagent from "superagent";
import superagentPromise from "superagent-promise";
import { useDispatch } from "react-redux";
import JWTService from "./JWTService";
let global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

const superagent = superagentPromise(_superagent, global.Promise);

// const dispatch = useDispatch()

const API_ROOT = "http://192.168.1.40:8000/api";
// const API_ROOT = "http://172.20.10.2:8000/api";
// const API_ROOT = "http://192.168.137.1:8000/api"
// const API_ROOT = "http://192.168.56.1:8000/api"
// const API_ROOT = "http://192.168.1.48:8000/api"

const responseBody = res => {
    return res
};

const responseToken = req => {
    if (localStorage.token) {
        req.set('Authorization', `Bearer ${localStorage.token}`);
    }

    if (localStorage.adminToken) {
        req.set('AuthorizationUser', `Bearer ${localStorage.adminToken}`);
    }
}

const errorBody = err => {
    console.log(err.response.body.detail);
    if (err.status == 401 || err.status == 403) {
        JWTService.removeToken()
    }
    throw err
}

const response = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(responseToken).then(responseBody).catch(errorBody),
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(responseToken).then(responseBody).catch(errorBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(responseToken).then(responseBody).catch(errorBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(responseToken).then(responseBody).catch(errorBody),
}

export default response
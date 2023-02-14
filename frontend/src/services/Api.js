import _superagent from "superagent";
import superagentPromise from "superagent-promise";

let global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

const superagent = superagentPromise(_superagent, global.Promise);

// const API_ROOT = "http://localhost:8000/api";
const API_ROOT = "http://192.168.137.1:8000/api"

const responseBody = res => {
    return res
};

const responseToken = req => {
    if (localStorage.token) {
        req.set('Authorization', `Bearer ${localStorage.token}`);
    }
}

const errorBody = err => {
    // console.log(err.response.body.detail);
    return err
    err.response.body.detail ? err.response.body.detail : null
}

const response = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(responseToken).then(responseBody),
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(responseToken).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(responseToken).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(responseToken).then(responseBody),
}

export default response
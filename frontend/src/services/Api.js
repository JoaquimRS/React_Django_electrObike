import _superagent from "superagent";
import superagentPromise from "superagent-promise";

let global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

const superagent = superagentPromise(_superagent, global.Promise);

// const API_ROOT = "http://localhost:8000/api";
const API_ROOT = "http://192.168.137.1:8000/api"

const responseBody = res => {
    return res;
};

const response = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody),
    del: url =>
        superagent.del(`${API_ROOT}${url}`).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
}

export default response
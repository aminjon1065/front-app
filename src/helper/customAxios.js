import axios from "axios";
import {API_APP} from "./CONSTANTS";

const JWTToken = localStorage.getItem("JWT_token");

export const apiRequest = axios.create({
    baseURL: `${API_APP}`
})

function apiSetHeader(name, value) {
    if (value) {
        apiRequest.defaults.headers.common[name] = value;
    }
}


if (JWTToken) {
    apiSetHeader('Authorization', `Bearer ${JWTToken}`);
}

// apiRequest.interceptors.request.use
// (
//     config => {
//         if (!config.defaults.headers.Authorization) {
//             window.location('/');
//             return config;
//         }
//
//     }, error => {
//         return Promise.reject(error);
//     }
// )

apiRequest.interceptors.request.use(function (config) {
       config.headers.common["Authorization"] = `Bearer ${JWTToken}`;
    return config
})

// export default apiRequest;

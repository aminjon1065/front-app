import axios from "axios";
import {API_APP} from "./CONSTANTS";

const JWTToken = localStorage.getItem("__token");

const apiRequest = axios.create({
    baseURL: `${API_APP}`
})

function apiSetHeader(name, value) {
    if (value) {
        apiRequest.defaults.headers[name] = value;
    }
}


if (JWTToken) {
    apiSetHeader('Authorization', `Bearer ${JWTToken}`);
}
apiRequest.interceptors.request.use
(
    config => {
        if (!config.defaults.headers['Authorization']) {
            window.location('/');
            return config;
        }
    }, error => {
        return Promise.reject(error);
    }
)

export default apiRequest;

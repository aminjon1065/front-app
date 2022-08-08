import axios from "axios";
import {API_APP} from "./CONSTANTS";

const token = localStorage.getItem('JWT_token');

export const apiRequest = axios.create({
    baseURL: `${API_APP}`
})

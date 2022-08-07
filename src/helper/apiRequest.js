import axios from "axios";
import {API_APP} from "./CONSTANTS";

export const apiRequest = axios.create({
    baseURL: `${API_APP}`
})
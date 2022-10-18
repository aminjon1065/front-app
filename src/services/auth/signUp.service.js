import {apiRequest} from "../../helper/apiRequest";

export const signUpService = async (credentials)=>{
    return await apiRequest.post("/register", credentials)
}
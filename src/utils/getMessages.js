import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_APP} from "../helper/CONSTANTS";

const token = localStorage.getItem("JWT_token")
export const messagesApi = createApi({
    reducerPath: "messagesApi",
    baseQuery: fetchBaseQuery({baseUrl: API_APP, headers: {"Authorization": `Bearer ${token}`}}),
    endpoints:(build) =>({
        getMessages:build.query({
            query:()=>`inbox`,
        })
    })
});

export const {useGetMessagesQuery} = messagesApi
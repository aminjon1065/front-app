import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_APP} from "../helper/CONSTANTS";

export const messagesApi = createApi({
    reducerPath: "messagesApi",
    
    baseQuery: fetchBaseQuery({
        baseUrl: API_APP, prepareHeaders: (headers) => {
const token = localStorage.getItem("JWT_token")

            // if (token){
                headers.set('authorization', `Bearer ${token}`)
            // }
         return headers
        }
    }),
    endpoints: (build) => ({
        getMessages: build.query({
            query: () => `inbox`,
        })
    })
});

export const {useGetMessagesQuery} = messagesApi
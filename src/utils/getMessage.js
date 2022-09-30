import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_APP} from "../helper/CONSTANTS";

export const messageApi = createApi({
    reducerPath: "messageApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_APP,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("JWT_token")
            headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    endpoints: (build) => ({
        getMessage: build.query({
            query: (id) => `inbox/${id}`,
        })
    })
});

export const {useGetMessageQuery} = messageApi
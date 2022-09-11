import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_APP} from "../helper/CONSTANTS";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_APP,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('JWT_token')
            headers.set('Authorization', `Bearer ${token}`)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => `usersList`,
        }),
    })
})

export const {useGetAllUsersQuery} = usersApi
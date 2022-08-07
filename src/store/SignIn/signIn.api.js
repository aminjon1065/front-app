import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_APP} from "../../helper/CONSTANTS";

export const signInApi = createApi({
    reducerPath: "signIn",
    baseQuery: fetchBaseQuery({baseUrl: API_APP}),
    endpoints: build => ({
        signInUser: build.query({
            query:()=>"login"
        }),
    }),
})

export const {useSignInUserQuery} = signInApi
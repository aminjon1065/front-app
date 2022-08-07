import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    authentificated: false,
    user: {},
    message: ""
}

export const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        signed: (state, action) => {
            state.authentificated = true
            state.user = action.payload?.data
            state.message = action.payload.message
        },
        signedError: (state) => {
            state.authentificated = false
            state.user = {}
        },
        logOut: (state) => {
            state.authentificated = false
            state.user = {}
        },
        isAuth: (state, action) => {
            state.authentificated = true
            state.user = action.payload
        }
    }
})

export const {signed, signedError, logOut, isAuth} = signInSlice.actions

export default signInSlice.reducer
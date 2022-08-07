import {createReducer} from "@reduxjs/toolkit";
import {createAction} from "@reduxjs/toolkit";

const initialState = {
    authentificated: false,
    user: {}
}

const signed = createAction("SIGNED")
const signError = createAction("SIGNERROR")


export default createReducer(initialState, {
    [signed]: (state, data) => {
        state.authentificated = true
        state.user = data
    },
    [signError]: (state) => {
        state.authentificated = false
        state.user = {}
    }
})
import {configureStore} from "@reduxjs/toolkit";
import SignInReducer from "./SLice/signInSlice";
import {messagesApi} from './../utils/getMessages'

export const rootReducer = {
    signIn: SignInReducer,
    [messagesApi.reducerPath]: messagesApi.reducer
}

export const store = configureStore({
    // reducer: {[signInApi.reducerPath]: signInApi.reducer},
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(signInApi.middleware)
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(messagesApi.middleware)
})
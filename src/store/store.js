import {configureStore} from "@reduxjs/toolkit";
import SignInReducer from "./SLice/signInSlice";
import {messagesApi} from '../utils/getMessages';
import {usersApi} from "../utils/getUsersList";
import {messageApi} from "../utils/getMessage";

export const rootReducer = {
    signIn: SignInReducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
}

export const store = configureStore({
    // reducer: {[signInApi.reducerPath]: signInApi.reducer},
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(signInApi.middleware)
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(messagesApi.middleware, usersApi.middleware, messageApi.middleware)
})
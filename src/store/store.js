import {configureStore, combineReducers} from "@reduxjs/toolkit";
import SignInReducer from "./SLice/signInSlice";

export const rootReducer = combineReducers({
    signIn: SignInReducer
})

export const store = configureStore({
    // reducer: {[signInApi.reducerPath]: signInApi.reducer},
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(signInApi.middleware)
    reducer: rootReducer
})

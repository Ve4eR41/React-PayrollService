import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./apis/authApi.ts";
import { shiftsApi } from "./apis/shifts.ts";

export const store = configureStore(
    {
        reducer: {
            [authApi.reducerPath]: authApi.reducer,
            [shiftsApi.reducerPath]: shiftsApi.reducer,
        },
        middleware: (grtDefaulMiddleware) => {
            return grtDefaulMiddleware()
                .concat(authApi.middleware)
                .concat(shiftsApi.middleware)
        }
    }
)

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { useLoginMutation, useRegistrationMutation } from "./apis/authApi.ts"
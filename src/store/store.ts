import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./apis/authApi.ts";
import { shiftsApi } from "./apis/shifts.ts";
import { userApi } from "./apis/users.ts";

export const store = configureStore(
    {
        reducer: {
            [authApi.reducerPath]: authApi.reducer,
            [shiftsApi.reducerPath]: shiftsApi.reducer,
            [userApi.reducerPath]: userApi.reducer,
        },
        middleware: (grtDefaulMiddleware) => {
            return grtDefaulMiddleware()
                .concat(authApi.middleware)
                .concat(shiftsApi.middleware)
                .concat(userApi.middleware)
        }
    }
)

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { useLoginMutation, useRegistrationMutation } from "./apis/authApi.ts"
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi, authSlice } from "./apis/authApi.ts";
import { shiftsApi } from "./apis/shifts.ts";
import { userApi } from "./apis/users.ts";
import { jobApi } from "./apis/job.ts";
import { shopApi } from "./apis/shop.ts";
import { roleApi } from "./apis/role.ts";
import { shiftTypeApi } from "./apis/shiftType.ts";
import { retailplanApi } from "./apis/retailPlan.ts";
import { payrollApi } from "./apis/payroll.ts";

export const store = configureStore(
    {
        reducer: {
            [authApi.reducerPath]: authApi.reducer,
            [authSlice.name]: authSlice.reducer,
            [shiftsApi.reducerPath]: shiftsApi.reducer,
            [retailplanApi.reducerPath]: retailplanApi.reducer,
            [userApi.reducerPath]: userApi.reducer,
            [jobApi.reducerPath]: jobApi.reducer,
            [payrollApi.reducerPath]: payrollApi.reducer,
            [roleApi.reducerPath]: roleApi.reducer,
            [shiftTypeApi.reducerPath]: shiftTypeApi.reducer,
            [shopApi.reducerPath]: shopApi.reducer,
        },
        middleware: (grtDefaulMiddleware) => {
            return grtDefaulMiddleware()
                .concat(authApi.middleware)
                .concat(shiftsApi.middleware)
                .concat(retailplanApi.middleware)
                .concat(userApi.middleware)
                .concat(jobApi.middleware)
                .concat(payrollApi.middleware)
                .concat(shopApi.middleware)
                .concat(roleApi.middleware)
                .concat(shiftTypeApi.middleware)
        }
    }
)

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { useLoginMutation, useRegistrationMutation, useIsAdmin } from "./apis/authApi.ts"
export { setIsAdmin, authSlice } from "./apis/authApi.ts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backend } from "../../../const";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
// import { getShopId } from "../../utils/getShopName";

interface AuthState {
    isAdmin: boolean;
}

const authSlice = createSlice({
    name: "authslice",
    initialState: { isAdmin: false } as AuthState,
    reducers: {
        setIsAdmin(state, action: PayloadAction<boolean>) {
            state.isAdmin = action.payload;
        },
    },
});

export const { setIsAdmin } = authSlice.actions;

export const useIsAdmin = () => useSelector((state: RootState) => state[authSlice.name].isAdmin);

const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/auth',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints(builder) {
        return {


            login: builder.mutation({
                query: (data) => {
                    return {
                        url: '/login',
                        Connection: "keep-alive",
                        method: 'POST',
                        body: {
                            fio: data.fio,
                            password: data.password,
                        },
                    }
                }
            }),



            registration: builder.mutation<string, UserAuthDetail>({
                query: (data) => {
                    return {
                        url: '/registration',
                        method: 'POST',
                        body: {
                            fio: data.fio,
                            password: data.password,
                        },
                    }
                }
            }),





        }
    },
})


export const { useLoginMutation, useRegistrationMutation } = authApi
// console.log(authApi);

export { authApi, authSlice }


export interface UserAuthDetail {
    fio: string;
    password: string;
}



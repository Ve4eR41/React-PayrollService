import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backend } from "../../../const";

const userApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/users',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    tagTypes: ['users'],
    endpoints(builder) {
        return {



            getUser: builder.query<User[], unknown>({
                query: () => ({ url: '', method: 'GET' }),
                providesTags: ['users']
            }),



            editUser: builder.mutation<string, UpdateUser>({
                query: (body) => {
                    return {
                        url: '/upd',
                        method: 'POST',
                        body
                    }
                },
                invalidatesTags: ['users']
            }),




        }
    },
})

export const { useGetUserQuery, useEditUserMutation } = userApi

export { userApi }



interface UpdateUser {
    id: number;
    fio?: string;
    shop?: number;
    job?: number;
    banned?: boolean;
    role?: number;
}


export interface User {
    id: number;
    fio: string;
    banned: boolean;
    banReason: null;
    createdAt: string;
    updatedAt: string;
    roles: Role[];
}

interface Role {
    value: string;
}












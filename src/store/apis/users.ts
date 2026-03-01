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
                query: (params) => ({ url: '', method: 'GET' }),
                providesTags: ['users']
            }),



            createUser: builder.mutation<string, undefined>({
                query: () => {
                    return {
                        url: '/create',
                        method: 'POST',
                    }
                },
                invalidatesTags: ['users']
            }),




        }
    },
})

export const { useGetUserQuery } = userApi

export { userApi }




interface User {
    id: number;
    fio: string;
    password: string;
    banned: boolean;
    banReason: null;
    createdAt: string;
    updatedAt: string;
    roles: Role[];
}

interface Role {
    value: string;
}












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
    tagTypes: ['users', 'thisUser'],
    endpoints(builder) {
        return {


            getThisUser: builder.query<User, unknown>({
                query: () => ({ url: '/thisUser', method: 'GET' }),
                providesTags: ['thisUser']
            }),



            getUser: builder.query<User[], unknown>({
                query: () => ({ url: '', method: 'GET' }),
                providesTags: (result) =>
                    result
                        ? [...result.map(({ id }) => ({ type: 'users' as const, id })), 'users']
                        : ['users'],
                keepUnusedDataFor: 300,
            }),



            createUser: builder.mutation<string, CreateUser>({
                query: (body) => {
                    return {
                        url: '',
                        method: 'POST',
                        body,
                    }
                },
                invalidatesTags: ['users']
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

export const { useGetUserQuery, useEditUserMutation, useCreateUserMutation, useGetThisUserQuery } = userApi

export { userApi }



interface UpdateUser {
    id: number;
    fio?: string;
    shop?: number;
    job?: number;
    banned?: boolean;
    role?: number;
}


interface CreateUser {
    password: string;
    fio: string;
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












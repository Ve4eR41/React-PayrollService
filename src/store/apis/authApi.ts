import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserAuthDetail {
    email: string;
    password: string;
}

const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/auth',
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
                            email: data.email,
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
                            email: data.email,
                            password: data.password,
                        },
                    }
                }
            }),




        }
    },

})

export const { useLoginMutation, useRegistrationMutation } = authApi
export { authApi } 
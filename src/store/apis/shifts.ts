import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/shifts',
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


            createShift: builder.mutation<string, CreateShiftDetail>({
                query: ({ timeStart, timeEnd, shopName, revenue, cheks }) => {
                    return {
                        url: '/create',
                        method: 'POST',
                        body: {
                            timeStart,
                            timeEnd,
                            shopName,
                            revenue,
                            cheks,
                        },
                    }
                }
            }),



            deleteShift: builder.mutation<string, DeleteShiftDetail>({
                query: ({ shiftId }) => {
                    return {
                        url: '/delete',
                        method: 'POST',
                        body: {
                            shiftId
                        },
                    }
                }
            }),






        }
    },

})

export const { useCreateShiftMutation, useDeleteShiftMutation } = authApi
export { authApi }


export interface CreateShiftDetail {
    timeStart: Date
    timeEnd: Date
    shopName: number
    revenue: number
    cheks: number
}

export interface DeleteShiftDetail {
    shiftId: number
}

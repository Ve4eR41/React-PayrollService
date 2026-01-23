import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getShopName } from "../../utils/getShopName";

const shiftsApi = createApi({
    reducerPath: 'shifts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.0.27:4000/shifts',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes: ['Shift'],
    endpoints(builder) {
        return {



            getShifts: builder.query<Shift[], void>({
                query: () => ({ url: '', method: 'GET', }),

                transformResponse: (response: ShiftRaw[]) => {
                    return response.map((shift) => ({
                        ...shift,
                        timeStart: new Date(shift.timeStart),
                        timeEnd: new Date(shift.timeEnd),
                        shopName: getShopName(shift.shopName)
                    }));
                },

                providesTags: ['Shift']
            }),



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
                },
                invalidatesTags: ['Shift']
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
                },
                invalidatesTags: ['Shift']
            }),






        }
    },
})

export const {
    useCreateShiftMutation,
    useDeleteShiftMutation,
    useGetShiftsQuery
} = shiftsApi

export { shiftsApi }






























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

export interface ShiftRaw {
    id: number
    timeStart: Date
    timeEnd: Date
    shopName: number
    revenue: number
    cheks: number
}

export interface Shift {
    id: number
    timeStart: Date
    timeEnd: Date
    shopName: string
    revenue: number
    cheks: number
}

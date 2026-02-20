import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getShopName } from "../../utils/utils";
import { backend } from "../../../const";

const shiftsApi = createApi({
    reducerPath: 'shifts',
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/shifts',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes: ['Shift', 'ShiftShop'],
    endpoints(builder) {
        return {



            getShifts: builder.query<Shift[], GetUsersShifts>({
                query: (params) => ({ url: '', method: 'GET', params }),

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



            editShift: builder.mutation<string, EditShiftDetail>({
                query: ({ timeStart, timeEnd, shopName, revenue, cheks, shiftId }) => {
                    return {
                        url: '/edit',
                        method: 'POST',
                        body: {
                            timeStart,
                            timeEnd,
                            shopName,
                            revenue,
                            cheks,
                            shiftId,
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


            // ShiftShop
            // ShiftShop
            // ShiftShop


            shiftsByShop: builder.query<Shift[], GetShiftsByShopDetail>({
                query: ({ startDate, endDate, shopName }) => {
                    return {
                        url: '/getShiftsByShop',
                        method: 'POST',
                        body: { startDate, endDate, shopName },
                    }
                },

                transformResponse: (response: ShiftRaw[]) => {
                    return response.map((shift) => ({
                        ...shift,
                        timeStart: new Date(shift.timeStart),
                        timeEnd: new Date(shift.timeEnd),
                        shopName: getShopName(shift.shopName)
                    }));
                },

                providesTags: ['ShiftShop']
            }),






        }
    },
})

export const {
    useCreateShiftMutation,
    useDeleteShiftMutation,
    useGetShiftsQuery,
    useEditShiftMutation,
    useShiftsByShopQuery
} = shiftsApi

export { shiftsApi }





















export interface GetUsersShifts {
    timeStart?: Date
    timeEnd?: Date
}





export interface GetShiftsByShopDetail {
    startDate: Date
    endDate: Date
    shopName: number
}
export interface CreateShiftDetail {
    timeStart: Date
    timeEnd: Date
    shopName: number
    revenue: number
    cheks: number
}
export interface EditShiftDetail {
    timeStart: Date
    timeEnd: Date
    shopName: number
    revenue: number
    cheks: number
    shiftId: number
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

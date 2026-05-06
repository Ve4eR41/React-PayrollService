import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backend } from "../../../const";

const retailplanApi = createApi({
    reducerPath: 'retailplan',
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/retail-plan',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    tagTypes: ['retailplan'],
    endpoints(builder) {
        return {



            getRetailPlanByDate: builder.query<RetailPlanDetail[], GetRetailPlanByDateProps>({
                query: (body) => ({ url: '/getByDate', method: 'POST', body }),
                providesTags: ['retailplan']
            }),



            createRetailPlan: builder.mutation<RetailPlanDetail[], CreateRetailPlanProps>({
                query: (body) => ({ url: '', method: 'POST', body }),
                invalidatesTags: ['retailplan']
            }),

        }
    },
})

export const { useGetRetailPlanByDateQuery, useCreateRetailPlanMutation } = retailplanApi

export { retailplanApi }

interface GetRetailPlanByDateProps {
    date: Date
}

export interface RetailPlanDetail {
    id: number;
    value: number;
    description: string;
    shopId: number;
    date: Date;
    createdAt: string;
    updatedAt: string;
}

export interface CreateRetailPlanProps {
    value: number;
    description: string;
    shopId: number;
    date: Date;
}


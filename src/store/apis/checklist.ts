import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backend } from "../../../const";

const checklistApi = createApi({
    reducerPath: 'checklist',
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/checklist',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    tagTypes: ['checklist'],
    endpoints(builder) {
        return {



            getChecklist: builder.query<ChecklistDetail[], getChecklistByDate>({
                query: (body) => ({ url: '/getByDate', method: 'POST', body }),
                providesTags: ['checklist']
            }),



            addChecklist: builder.mutation<ChecklistDetail[], ChecklistDetailProps>({
                query: (body) => ({ url: '', method: 'POST', body }),
                invalidatesTags: ['checklist']
            }),



        }
    },
})

export const { useGetChecklistQuery, useAddChecklistMutation } = checklistApi

export { checklistApi }


interface getChecklistByDate {
    date: Date
}

export interface ChecklistDetail {
    description: string;
    userId: number;
    date: Date;
    isCompleat: boolean;
}

export interface ChecklistDetailProps {
    description: string;
    userId: number;
    date: Date;
    isCompleat: boolean;
}







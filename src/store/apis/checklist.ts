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


            checklist: builder.query<ChecklistDetail[], unknown>({
                query: () => ({ url: '', method: 'GET' }),
                providesTags: ['checklist']
            }),



        }
    },
})

export const { useChecklistQuery } = checklistApi

export { checklistApi }


interface ChecklistDetail {
    id: number;
    value: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}






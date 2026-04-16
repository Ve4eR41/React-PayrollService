import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backend } from "../../../const";

const name = 'shiftType'
const shiftTypeApi = createApi({
    reducerPath: name,
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/' + name,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    tagTypes: [name],
    endpoints(builder) {
        return {


            shiftTypeList: builder.query<shiftTypeDetail[], unknown>({
                query: () => ({ url: '', method: 'GET' }),
                providesTags: [name]
            }),



        }
    },
})

export const { useShiftTypeListQuery } = shiftTypeApi

export { shiftTypeApi }


interface shiftTypeDetail {
    id: number;
    value?: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}






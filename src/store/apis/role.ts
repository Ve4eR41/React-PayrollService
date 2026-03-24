import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backend } from "../../../const";

const roleApi = createApi({
    reducerPath: 'role',
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/roles',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    tagTypes: ['role'],
    endpoints(builder) {
        return {


            roleList: builder.query<roleDetail[], unknown>({
                query: () => ({ url: '', method: 'GET' }),
                providesTags: ['role']
            }),



        }
    },
})

export const { useRoleListQuery } = roleApi

export { roleApi }


interface roleDetail {
    id: number;
    value: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}






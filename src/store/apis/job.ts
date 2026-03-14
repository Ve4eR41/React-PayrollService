import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backend } from "../../../const";

const jobApi = createApi({
    reducerPath: 'job',
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/job',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    tagTypes: ['job'],
    endpoints(builder) {
        return {


            jobList: builder.query<JobDetail[], unknown>({
                query: () => ({ url: '', method: 'GET' }),
                providesTags: ['job']
            }),



        }
    },
})

export const { useJobListQuery } = jobApi

export { jobApi }


interface JobDetail {
  id: number;
  value: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}






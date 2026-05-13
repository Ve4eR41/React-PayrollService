import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backend } from "../../../const";

const payrollApi = createApi({
    reducerPath: 'payroll',
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/payroll',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    tagTypes: ['payroll'],
    endpoints(builder) {
        return {


            getPayroll: builder.query<payrollDetail[], GetPayrollProps>({
                query: (body) => ({ url: '/getTemplatePayroll', method: 'POST', body }),
                providesTags: ['payroll']
            }),



        }
    },
})

export const { useGetPayrollQuery } = payrollApi

export { payrollApi }


interface payrollDetail {
    id: number;
    value: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

interface GetPayrollProps {
  timeStart: Date;
  timeEnd: Date;
}




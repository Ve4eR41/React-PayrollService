import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backend } from "../../../const";

const shopApi = createApi({
    reducerPath: 'shop',
    baseQuery: fetchBaseQuery({
        baseUrl: backend + '/shop',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    tagTypes: ['shop'],
    endpoints(builder) {
        return {



            shopList: builder.query<ShopDetail[], unknown>({
                query: () => ({ url: '', method: 'GET' }),
                providesTags: ['shop']
            }),



            createShop: builder.mutation<ShopDetail[], CreateShopProps>({
                query: (body) => ({ url: '', method: 'POST', body }),
                invalidatesTags: ['shop']
            }),

        }
    },
})

export const { useShopListQuery, useCreateShopMutation } = shopApi

export { shopApi }


interface ShopDetail {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateShopProps {
    name: string;
}


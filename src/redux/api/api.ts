import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// query for get, mutation for post
// createApi er moddhe reducerPath,baseQuery, endpoints ei 3ta must thakte hobe.
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery( {baseUrl: "http://localhost:5000"} ),
    endpoints: (builder)=>({
        getTodos: builder.query({
            query: ()=>( {
                url: '/tasks',
                method: 'GET',
            }),
        }),
    }),
})

export const {useGetTodosQuery} = baseApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// query for get, mutation for post
// createApi er moddhe reducerPath,baseQuery, endpoints ei 3ta must thakte hobe.
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery( {baseUrl: "http://localhost:5000"} ),
    endpoints: (builder)=>({
        getTodos: builder.query({
            query: ()=>( {
                url: '/task',
                method: 'GET',
            }),
        }),

        // backend obj expect kore. post korar somoy obj send korte hobe
        // single vale send korte holeo obj hisebe send korte hobe. 
        // query: (catagoryName)=>( {
        //     url: '/tasks',
        //     method: 'POST',
        //     body: { category: catagoryName}
        // }),
        addTodos: builder.mutation({
            query: (data)=>( {
                url: '/task',
                method: 'POST',
                body: data
            }),
        }),

    }),
})

// hook export kortechi. getTodos er jnno useGetTodosQuery
// addTodos er jnno useAddTodosMutation
export const {useGetTodosQuery, useAddTodosMutation} = baseApi;
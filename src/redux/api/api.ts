import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// createApi er moddhe reducerPath,baseQuery, endpoints ei 3ta must thakte hobe.
const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery( {baseUrl: "http://localhost:5000"} ),
    endpoints: ()=>({
        
    })
})
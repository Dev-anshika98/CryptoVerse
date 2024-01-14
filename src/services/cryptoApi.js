import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {

    'X-RapidAPI-Key': '983401e460msh98965f9fe8c5d51p11a1bbjsnad940eeff281',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    

}
const baseUrl= 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url)=>({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`,),
        }),
    }),
});



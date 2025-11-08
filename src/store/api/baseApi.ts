import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.BASE_API_URL || 'https://reqres.in/api/',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', 'reqres-free-v1'); 
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: () => ({}),
});
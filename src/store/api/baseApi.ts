import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.BASE_API_URL || 'https://test.',
  }),
  tagTypes: ['Test'],
  endpoints: () => ({}),
});
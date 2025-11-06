import { baseApi } from './baseApi';

export const testAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTest: builder.query<unknown[], void>({
      query: () => 'test',
      providesTags: ['Test'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTestQuery } = testAPi;
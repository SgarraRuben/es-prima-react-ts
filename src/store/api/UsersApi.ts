import type { ResponseApi, UsersResponse } from '@utilities/interface/response';
import { baseApi } from './baseApi';
import type { QueryParamsUsers } from '@utilities/interface/request';

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, QueryParamsUsers>({
      query: ({ page = 1, perPage = 5 }) =>
        `users?page=${page}&per_page=${perPage}`,
      transformResponse: (response: ResponseApi): UsersResponse => ({
        data: response.data.map((user) => ({
          ...user,
          role: Math.random() > 0.5 ? 'admin' : 'user',
        })),
        pageInfo: {
          page: response.page,
          perPage: response.per_page,
          total: response.total,
          totalPages: response.total_pages,
        },
      }),
      providesTags: ['Users'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = usersApi;
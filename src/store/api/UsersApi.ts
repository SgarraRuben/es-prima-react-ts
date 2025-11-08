import { baseApi } from './baseApi';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  role: 'admin' | 'user';
}

interface RequestUsers {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ResponseUsers {
  page: number;
  per_page: number; 
  total: number;
  total_pages: number;
  data: RequestUsers[];
}

interface QueryParamsUsers {
  page?: number;
  perPage?: number;
}

export interface UsersResponse {
  data: User[];
  pageInfo: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, QueryParamsUsers>({
      query: ({ page = 1, perPage = 5 }) =>
        `users?page=${page}&per_page=${perPage}`,
      transformResponse: (response: ResponseUsers): UsersResponse => ({
        data: response.data.map((user) => ({
          ...user,
          role: Math.random() > 0.5 ? 'admin' : 'user', // genera ruolo casuale
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
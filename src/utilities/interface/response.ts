import type { User } from "./model";

export interface UsersResponse {
  data: User[];
  pageInfo: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export interface UsersApi {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ResponseApi {
  page: number;
  per_page: number; 
  total: number;
  total_pages: number;
  data: UsersApi[];
}
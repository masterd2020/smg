import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {APP_ID} from '../../constants'

export const userApiSlice = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyapi.io/data/v1',
    prepareHeaders(headers) {
      headers.set('app-id', APP_ID)
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getUsers: builder.query({
        query(limit = 10) {
          return `/user?limit=${limit}`;
        }
      }),
      getUserById: builder.query({
        query(id) {
          return `/user/${id}`;
        }
      })
    }
  }
})

export const { useGetUsersQuery, useGetUserByIdQuery } = userApiSlice
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApiSilce = createApi({
  reducterPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://jsonplaceholder.typicode.com'
    baseUrl: 'https://dummyapi.io'
    // prepareHeaders(headers) {
    //   headers.set('hey', 'api key')
    //   return headers;
    // },
  }),
  endpoints: (builder) => {
    return {
      getUsers: builder.query({
        query(limit = 5) {
          return `/users?limit=${limit}`;
        }
      })
    }
  }
})

export const { useGetUsersQuery } = userApiSilce
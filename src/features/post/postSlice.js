import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {APP_ID} from '../../constants'

export const postApiSilce = createApi({
  reducterPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyapi.io/data/v1',
    prepareHeaders(headers) {
      headers.set('app-id', APP_ID)
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getPosts: builder.query({
        query(limit = 10) {
          return `/post?limit=${limit}`;
        }
      }),
      getPostById: builder.query({
        query(id) {
          return `/post/${id}`;
        }
      })
    }
  }
})

export const { useGePostsQuery, useGetPostByIdQuery } = postApiSilce
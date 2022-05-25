import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {APP_ID} from '../../constants'

export const postApiSlice = createApi({
  reducerPath: 'postAPI',
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
      }),
      getPaginatedPosts: builder.query({
        query({limit = 10, page = 1}) {
          return `/post?limit=${limit}&page=${page}`;
        }
      }),
      getPostByUser: builder.query({
        query(id) {
          return `/user/${id}/post`;
        }
      })
    }
  }
})

export const { useGetPostsQuery, useGetPaginatedPostsQuery, useGetPostByIdQuery, useGetPostByUserQuery } = postApiSlice
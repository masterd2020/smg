import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {APP_ID} from '../../constants'

export const commentApiSilce = createApi({
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
      getComments: builder.query({
        query(limit = 10) {
          return `/post?limit=${limit}`;
        }
      }),
      getCommentById: builder.query({
        query(id) {
          return `/post/${id}`;
        }
      })
    }
  }
})

export const { useGeCommentsQuery, useGetCommentByIdQuery } = commentApiSilce
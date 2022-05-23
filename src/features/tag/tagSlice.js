import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {APP_ID} from '../../constants'

export const tagApiSlice = createApi({
  reducterPath: 'tagAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyapi.io/data/v1',
    prepareHeaders(headers) {
      headers.set('app-id', APP_ID)
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getTags: builder.query({
        query(limit = 10) {
          return `/tag?limit=${limit}`;
        }
      }),
      getTagById: builder.query({
        query(id) {
          return `/tag/${id}`;
        }
      })
    }
  }
})

export const { useGetTagsQuery, useGetTagByIdQuery } = tagApiSlice
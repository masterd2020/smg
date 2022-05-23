import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter-slice'
import {userApiSlice} from '../features/user/userSlice'
import {postApiSlice} from '../features/post/postSlice'
import {commentApiSlice} from '../features/comment/commentSlice'
import {tagApiSlice} from '../features/tag/tagSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
    [commentApiSlice.reducerPath]: commentApiSlice.reducer,
    [tagApiSlice.reducerPath]: tagApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApiSlice.middleware).concat(postApiSlice.middleware).concat(commentApiSlice.middleware).concat(tagApiSlice.middleware)
  }
})
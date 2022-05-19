import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter-slice'
import {userApiSilce} from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApiSilce.reducerPath]: userApiSilce.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApiSilce.middleware)
  }
})
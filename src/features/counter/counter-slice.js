// DUCKS Pattern
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    }
  }
})

export const {increment, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer
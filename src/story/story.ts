import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const testSlicer = createSlice({
  name: 'test',
  initialState: {
    value: 0,
  },
  reducers: {},
})

export default configureStore({
  reducer: {
    test: testSlicer.reducer,
  },
})

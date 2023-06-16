import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface LoginState {
  isSignedIn: boolean
}

const initialState: LoginState = {
  isSignedIn: false,
}

const loginSlicer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: state => {
      state.isSignedIn = true
    },
    logout: state => {
      state.isSignedIn = false
    },
  },
})

const store = configureStore({
  reducer: {
    login: loginSlicer.reducer,
  },
})

export const { login, logout } = loginSlicer.actions

export type RootState = ReturnType<typeof store.getState>

export default store

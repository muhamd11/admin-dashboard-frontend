import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import usersReducer from './users/usersSlice'
import productsReducer from './products/productsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    products: productsReducer
  },
})
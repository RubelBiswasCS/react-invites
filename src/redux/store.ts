import type { TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from './services/baseApi'

import alertReducer from './reducers/alertReducer'
import homeReducer from './reducers/homeReducer'

const store = configureStore({
  reducer: {
    alert: alertReducer,
    home: homeReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    baseApi.middleware
  ])
})

setupListeners(store.dispatch)

// Declare Typed Definitions
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from './data/data.slice'

export const store = configureStore({
  reducer: { data: dataReducer }
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
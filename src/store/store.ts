import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from 'features/Todo/todoSlice'

const rootReducer = combineReducers({ todos: todoReducer })

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
// export type RootState = ReturnType<typeof store.getState>

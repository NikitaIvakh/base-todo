import { createSlice } from '@reduxjs/toolkit'
import { Todo } from 'types'
import {
	createTodo,
	fetchAllTodos,
	removeTodo,
	toggleTodo,
} from './todoActionsAsync'

export type TodoSlice = {
	status: 'idle' | 'loading' | 'finished' | 'error'
	list: Todo[]
}

const initialState: TodoSlice = {
	status: 'idle',
	list: [],
}

const todoSliceAsync = createSlice({
	name: '@todos',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchAllTodos.pending, state => {
			state.status = 'loading'
		})
		builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
			state.list = action.payload
			state.status = 'finished'
		})
		builder.addCase(fetchAllTodos.rejected, state => {
			state.status = 'error'
		})
		builder.addCase(createTodo.fulfilled, (state, action) => {
			state.list.push(action.payload)
			state.status = 'finished'
		})
		builder.addCase(toggleTodo.fulfilled, (state, action) => {
			const todo = state.list.find(item => item.id === action.payload.id)
			if (todo) {
				todo.completed = action.payload.completed
			}
		})
		builder.addCase(removeTodo.fulfilled, (state, action) => {
			state.list = state.list.filter(todo => todo.id !== action.payload)
		})
		builder.addDefaultCase(() => {})
	},
})

export default todoSliceAsync.reducer

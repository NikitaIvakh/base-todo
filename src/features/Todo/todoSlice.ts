import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from 'types'
import { v4 as uuidv4 } from 'uuid'

const initialState: Todo[] = []

const todoSlice = createSlice({
	name: '@todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			const newTodo = {
				id: uuidv4(),
				userId: uuidv4(),
				title: action.payload,
				completed: false,
			}

			return [...state, newTodo]
		},
		toggleTodo: (state, action: PayloadAction<Todo['id']>) => {
			const todo = state.find(item => item.id === action.payload)

			if (todo) {
				todo.completed = !todo.completed
			}
		},
		removeTodo: (state, action: PayloadAction<Todo['id']>) => {
			return state.filter(item => item.id !== action.payload)
		},
	},
})

export default todoSlice.reducer
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions

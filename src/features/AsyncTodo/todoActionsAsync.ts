import { createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from 'hooks/useHttp'
import { Todo } from 'types'
import { v4 as uuidv4 } from 'uuid'
import { TodoSlice } from './todoSliceAsync'

export const fetchAllTodos = createAsyncThunk<
	Todo[],
	undefined,
	{ state: { todosAsync: TodoSlice } }
>(
	'todos/fetchTodos',
	async () => {
		const { request } = useHttp()
		return await request('https://jsonplaceholder.typicode.com/todos?_limit=10')
	},
	{
		condition: (_, { getState }) => {
			const { status } = getState().todosAsync

			if (status === 'loading') {
				return false
			}
		},
	}
)

export const createTodo = createAsyncThunk<
	Todo,
	string,
	{ state: { todosAsync: TodoSlice } }
>(
	'todo/createTodo',
	async text => {
		const { request } = useHttp()

		const newTodo: Required<Omit<Todo, 'id'>> = {
			userId: uuidv4(),
			title: text,
			completed: false,
		}

		return await request(
			'https://jsonplaceholder.typicode.com/todos',
			'POST',
			JSON.stringify(newTodo)
		)
	},
	{
		condition: (_, { getState }) => {
			const { status } = getState().todosAsync

			if (status === 'loading') {
				return false
			}
		},
	}
)

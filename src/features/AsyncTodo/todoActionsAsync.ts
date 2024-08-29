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
			if (status === 'loading') return false
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
			if (status === 'loading') return false
		},
	}
)

export const toggleTodo = createAsyncThunk<
	Todo,
	Todo['id'],
	{ state: { todosAsync: TodoSlice } }
>(
	'todo/toggleTodo',
	async (id, { getState, rejectWithValue }) => {
		const { request } = useHttp()
		const todo = getState().todosAsync.list.find(item => item.id === id)

		if (todo) {
			return await request(
				`https://jsonplaceholder.typicode.com/todos/${id}`,
				'PATCH',
				JSON.stringify({
					completed: !todo.completed,
				})
			)
		}

		return rejectWithValue(`No such todo with id: ${id}`)
	},
	{
		condition: (_, { getState }) => {
			const { status } = getState().todosAsync
			if (status === 'loading') return false
		},
	}
)

export const removeTodo = createAsyncThunk<
	Todo['id'],
	Todo['id'],
	{ state: { todosAsync: TodoSlice } }
>(
	'todo/removeTodo',
	async id => {
		const { request } = useHttp()
		await request(`https://jsonplaceholder.typicode.com/posts/${id}`, 'DELETE')

		return id
	},
	{
		condition: (_, { getState }) => {
			const { status } = getState().todosAsync
			if (status === 'loading') return false
		},
	}
)

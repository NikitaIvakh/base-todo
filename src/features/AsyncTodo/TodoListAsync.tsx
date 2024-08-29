import TodoItem from 'components/TodoItem'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook'
import { useEffect } from 'react'
import { Todo } from 'types'
import { fetchAllTodos } from './todoActionsAsync'

const TodoListAsync = () => {
	const { list } = useAppSelector(state => state.todosAsync)
	const dispatch = useAppDispatch()

	useEffect(() => {
		onUpdateTodos()
	}, [])

	const onUpdateTodos = () => {
		dispatch(fetchAllTodos())
	}

	const handleRemoveTodo = (id: Todo['id']) => {
		// dispatch(removeTodo(id))
	}

	const handleToggleTodo = (id: Todo['id']) => {
		// dispatch(toggleTodo(id))
	}

	return (
		<ul>
			{list.map(todo => (
				<TodoItem
					key={todo.id}
					toggleTodo={handleToggleTodo}
					removeTodo={handleRemoveTodo}
					{...todo}
				/>
			))}
		</ul>
	)
}

export default TodoListAsync

import TodoItem from 'components/TodoItem'
import { useAppDispatch } from 'hooks/redux-hook'
import { useSelector } from 'react-redux'
import { Todo } from 'types'
import { selectAllTodos } from './todoSelector'
import { removeTodo, toggleTodo } from './todoSlice'

const TodoList = () => {
	const list = useSelector(selectAllTodos)
	const dispatch = useAppDispatch()

	const handleRemoveTodo = (id: Todo['id']) => {
		dispatch(removeTodo(id))
	}

	const handleToggleTodo = (id: Todo['id']) => {
		dispatch(toggleTodo(id))
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

export default TodoList

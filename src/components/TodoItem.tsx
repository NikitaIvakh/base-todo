import { Todo } from '../types'

interface ITodoItem extends Todo {
	toggleTodo: (id: Todo['id']) => void
	removeTodo: (id: Todo['id']) => void
}

const TodoItem = (props: ITodoItem) => {
	const { id, title, completed, toggleTodo, removeTodo } = props

	return (
		<li style={{ color: 'red', backgroundColor: 'white' }}>
			<input
				type='checkbox'
				defaultChecked={completed}
				onChange={() => toggleTodo(id)}
			/>
			<span>{title}</span>
			<span style={{ cursor: 'pointer' }} onClick={() => removeTodo(id)}>
				&times;
			</span>
		</li>
	)
}

export default TodoItem

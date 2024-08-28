import { Todo } from '../types'

interface ITodoItem extends Todo {
	changeState: any
	deleteTodo: any
}

const TodoItem = (props: ITodoItem) => {
	const { id, title, completed, changeState, deleteTodo } = props

	return (
		<li style={{ color: 'red', backgroundColor: 'white' }}>
			<input
				type='checkbox'
				defaultChecked={completed}
				onChange={() => changeState(id)}
			/>
			<span>{title}</span>
			<span style={{ cursor: 'pointer' }} onClick={() => deleteTodo(id)}>
				&times;
			</span>
		</li>
	)
}

export default TodoItem

import NewItem from 'components/NewItem'
import { useAppDispatch } from 'hooks/redux-hook'
import { createTodo } from './todoActionsAsync'

const NewTodoAsync = () => {
	const dispatch = useAppDispatch()

	const handleAddTodo = (title: string) => {
		dispatch(createTodo(title))
	}

	return <NewItem placeholder='add new todo' handleClick={handleAddTodo} />
}

export default NewTodoAsync

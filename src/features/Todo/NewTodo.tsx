import NewItem from 'components/NewItem'
import { useAppDispatch } from 'hooks/redux-hook'
import { addTodo } from './todoSlice'

const NewTodo = () => {
	const dispatch = useAppDispatch()

	const handleAddTodo = (title: string) => {
		dispatch(addTodo(title))
	}

	return <NewItem placeholder='add new todo' handleClick={handleAddTodo} />
}

export default NewTodo

import { useEffect, useState } from 'react'
import './App.css'
import NewTodoForm from './components/NewTodoForm'
import TodoItem from './components/TodoItem'
import { Todo } from './types'

function App() {
	const [todos, setTodos] = useState<Todo[]>([])

	useEffect(() => {
		onUpdateTodos()
	}, [])

	const onUpdateTodos = () => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(onTodoLoaded)
	}

	const onTodoLoaded = (newTodo: any) => {
		setTodos([...todos, ...newTodo])
	}

	const addTodo = (text: string) => {
		const newTodo = {
			id: new Date().toString(),
			title: text,
			completed: false,
		}

		setTodos([...todos, newTodo])
	}

	const toggleTodoCompletion = (id: string) => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}

	const deleteTodo = (id: string) => {
		setTodos(todos.filter(item => item.id !== id))
	}

	return (
		<div className='App'>
			<NewTodoForm handleClick={addTodo} />
			{todos
				.filter(item => item.completed !== true)
				.map((item, i) => {
					return (
						<TodoItem
							key={i}
							id={item.id}
							completed={item.completed}
							title={item.title}
							changeState={toggleTodoCompletion}
							deleteTodo={deleteTodo}
						/>
					)
				})
				.reverse()}
		</div>
	)
}

export default App

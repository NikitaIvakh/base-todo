import NewTodoAsync from 'features/AsyncTodo/NewTodoAsync'
import TodoListAsync from 'features/AsyncTodo/TodoListAsync'
import './App.css'

function App() {
	return (
		<div className='App'>
			{/* <NewTodo />
			<TodoList /> */}
			<NewTodoAsync />
			<TodoListAsync />
		</div>
	)
}

export default App

import { useRef, useState } from 'react'

interface INewTodoForm {
	handleClick: (text: string) => void
}

const NewTodoForm = ({ handleClick }: INewTodoForm) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [text, setText] = useState('')

	const onClick = () => {
		if (inputRef.current) {
			handleClick(inputRef.current.value)
		}

		setText('')
	}

	const onUpdateText = (event: HTMLInputElement) => {
		setText(event.value)
	}

	return (
		<>
			<input
				type='text'
				placeholder='new todo'
				ref={inputRef}
				value={text}
				onChange={event => onUpdateText(event.target)}
			/>
			<button onClick={onClick}>Add todo</button>
		</>
	)
}

export default NewTodoForm

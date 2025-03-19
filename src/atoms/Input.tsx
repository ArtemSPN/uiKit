import TextField from '@mui/material/TextField'

interface InputUIProps {
	size?: 'small' | 'medium'
	type?: 'text' | 'password' | 'email' | 'number'
	placeholder?: string
	value: string // Убираем optional, чтобы компонент стал обязательным
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void // Добавляем onChange
}

const InputUI: React.FC<InputUIProps> = ({
	size = 'medium',
	type = 'text',
	placeholder = '',
	value,
	onChange,
}) => {
	return (
		<TextField
			size={size}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange} // Передаем onChange в TextField
		/>
	)
}

export default InputUI

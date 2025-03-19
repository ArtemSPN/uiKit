import Button, { ButtonProps } from '@mui/material/Button'
import { PropsWithChildren } from 'react'

interface ButtonUIProps extends ButtonProps {
	size?: 'small' | 'medium' | 'large'
	variant?: 'text' | 'contained' | 'outlined'
}

const ButtonUI: React.FC<PropsWithChildren<ButtonUIProps>> = ({
	size = 'medium',
	variant = 'contained',
	children,
	onClick,
	...muiButtonProps // передаем все остальные пропсы
}) => {
	return (
		<Button size={size} variant={variant} onClick={onClick} {...muiButtonProps}>
			{children}
		</Button>
	)
}

export default ButtonUI

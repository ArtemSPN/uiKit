import Typography from '@mui/material/Typography'

interface TextUIProps {
	variant?:
		| 'body1'
		| 'body2'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'subtitle1'
		| 'subtitle2'
		| 'caption'
		| 'overline'
	color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
	gutterBottom?: boolean
	children: React.ReactNode
}

const TextUI: React.FC<TextUIProps> = ({
	variant = 'body1',
	color = 'textPrimary',
	align = 'inherit',
	gutterBottom = false,
	children,
}) => {
	return (
		<Typography
			variant={variant}
			color={color}
			align={align}
			gutterBottom={gutterBottom}
		>
			{children}
		</Typography>
	)
}

export default TextUI

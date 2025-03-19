import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Paper,
} from '@mui/material'
import { useState } from 'react'

interface NavItem {
	link: string
	icon: React.ReactNode
}

interface NavigateBarProps {
	items: NavItem[]
}

const NavigateBar: React.FC<NavigateBarProps> = ({ items }) => {
	const [value, setValue] = useState(0)

	return (
		<Paper
			elevation={3}
			sx={{
				position: 'fixed',
				zIndex: 234,
				bottom: 16,
				left: '50%',
				transform: 'translateX(-50%)',
				width: '90%',
				maxWidth: 400,
				borderRadius: 10,
				backgroundColor: 'rgb(128, 175, 255)', // Полностью непрозрачный цвет
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					bottom: 8,
					left: `calc(${(value / items.length) * 100}% + ${
						100 / items.length / 2
					}%)`,
					width: 50,
					height: 50,
					borderRadius: '50%',
					backgroundColor: 'white',
					transition: 'left 0.3s ease-in-out',
					transform: 'translateX(-50%)',
				}}
			/>
			<BottomNavigation
				value={value}
				onChange={(_, newValue) => setValue(newValue)}
				sx={{
					backgroundColor: 'transparent',
					height: 70,
					display: 'flex',
					width: '100%',
				}}
			>
				{items.map((item, index) => (
					<BottomNavigationAction
						disableRipple
						key={index}
						icon={
							<Box
								sx={{
									color: value === index ? 'primary.main' : 'white',
									transition: 'color 0.3s ease',
								}}
							>
								{item.icon}
							</Box>
						}
						sx={{
							minWidth: 'auto',
							padding: 0,
							flex: 1,
							'&.Mui-selected': {
								color: 'primary.main',
							},
							'&:hover, &:focus, &:active': {
								backgroundColor: 'transparent',
							},
						}}
					/>
				))}
			</BottomNavigation>
		</Paper>
	)
}

export default NavigateBar

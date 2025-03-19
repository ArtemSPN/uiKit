import { Box } from '@mui/material'
import { useState } from 'react'

interface BrightnessSliderProps {
	icon: React.ReactNode
}

const SliderUI: React.FC<BrightnessSliderProps> = ({ icon }) => {
	const [value, setValue] = useState(50)

	const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
		const { top, height } = e.currentTarget.getBoundingClientRect()
		const newValue = 100 - ((e.clientY - top) / height) * 100
		setValue(Math.min(100, Math.max(0, newValue)))
	}

	return (
		<Box
			sx={{
				height: 200,
				width: 60,
				borderRadius: '30px',
				background:
					'linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8))',
				position: 'relative',
				cursor: 'pointer',
				overflow: 'hidden',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onMouseDown={handleChange}
			onMouseMove={e => e.buttons === 1 && handleChange(e)}
		>
			{/* Иконка на фоне слайдера */}
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 36,
					height: 36,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{icon}
			</Box>

			{/* Залитая часть */}
			<Box
				sx={{
					position: 'absolute',
					bottom: 0,
					width: '100%',
					height: `${value}%`,
					background: 'rgba(255, 255, 255, 0.6)',
					transition: 'height 0.1s ease',
				}}
			/>
		</Box>
	)
}

export default SliderUI

import { Box, Typography } from '@mui/material'

interface TitleWithSubtitleProps {
	title: string
	subtitle: string
	subtitleTop?: boolean
	size?: 'small' | 'large'
}

const TitleWithSubtitle: React.FC<TitleWithSubtitleProps> = ({
	title,
	subtitle,
	subtitleTop = false,
	size = 'large',
}) => {
	const isSmall = size === 'small'

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: subtitleTop ? 'column-reverse' : 'column',
				alignItems: isSmall ? 'flex-start' : 'center',
				gap: 0.5,
				overflow: 'hidden',
			}}
		>
			<Typography
				variant={isSmall ? 'body2' : 'h6'}
				fontWeight='bold'
				noWrap={isSmall}
				sx={{
					textOverflow: isSmall ? 'ellipsis' : 'unset',
					whiteSpace: isSmall ? 'nowrap' : 'normal',
					overflow: isSmall ? 'hidden' : 'visible',
				}}
			>
				{title}
			</Typography>
			<Typography
				variant={isSmall ? 'caption' : 'body1'}
				color='textSecondary'
				noWrap={isSmall}
				sx={{
					textOverflow: isSmall ? 'ellipsis' : 'unset',
					whiteSpace: isSmall ? 'nowrap' : 'normal',
					overflow: isSmall ? 'hidden' : 'visible',
				}}
			>
				{subtitle}
			</Typography>
		</Box>
	)
}

export default TitleWithSubtitle

import { Card, CardContent, CardMedia } from '@mui/material'
import TitleWithSubtitle from '../atoms/TitleWithSubtitle'

interface BookCardProps {
	title: string
	author: string
	image: string
	size?: 'small' | 'large'
}

const BookCard: React.FC<BookCardProps> = ({
	title,
	author,
	image,
	size = 'large',
}) => {
	const isSmall = size === 'small'

	return (
		<Card sx={{ width: isSmall ? 150 : 250, boxShadow: 3 }}>
			<CardMedia
				component='img'
				height={isSmall ? 200 : 350}
				image={image}
				alt={title}
			/>
			<CardContent
				sx={{ textAlign: isSmall ? 'left' : 'center', overflow: 'hidden' }}
			>
				<TitleWithSubtitle
					title={title}
					subtitle={author}
					subtitleTop
					size={size}
				/>
			</CardContent>
		</Card>
	)
}

export default BookCard

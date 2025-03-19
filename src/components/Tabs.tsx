import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

interface TabData {
	label: string
	content: React.ReactNode
}

interface TabsUIProps {
	tabData: TabData[]
}

const TabsUI: React.FC<TabsUIProps> = ({ tabData }) => {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<Box sx={{ width: '100%' }}>
			<Tabs
				value={activeTab}
				onChange={(_, newValue) => setActiveTab(newValue)}
				variant='scrollable'
				scrollButtons='auto'
				textColor='primary'
				indicatorColor='primary'
			>
				{tabData.map((tab, index) => (
					<Tab disableRipple key={index} label={tab.label} />
				))}
			</Tabs>
			<Box sx={{ p: 2 }}>{tabData[activeTab].content}</Box>
		</Box>
	)
}

export default TabsUI

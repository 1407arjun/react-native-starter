import { View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { useSelector } from 'react-redux'

import Text from '../components/atoms/Text'

const Home = () => {
	const { isError } = useSelector((state: { isError: boolean }) => state)

	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	)
}

export default Home

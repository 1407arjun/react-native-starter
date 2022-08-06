import 'react-native-gesture-handler'

import { registerRootComponent } from 'expo'

import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigator'

const App = () => {
	return (
		<NavigationContainer>
			<DrawerNavigator />
		</NavigationContainer>
	)
}

registerRootComponent(App)

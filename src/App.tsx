import 'react-native-gesture-handler'

import { registerRootComponent } from 'expo'

import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigator'

import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		</Provider>
	)
}

registerRootComponent(App)

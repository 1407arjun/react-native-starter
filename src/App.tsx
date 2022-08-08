import 'react-native-gesture-handler'

import { registerRootComponent } from 'expo'

import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigator'

import { Provider } from 'react-redux'
import store from './store/store'

import { TailwindProvider } from 'tailwindcss-react-native'
import 'tailwindcss-react-native/types.d'

const App = () => {
	return (
		<Provider store={store}>
			<TailwindProvider>
				<NavigationContainer>
					<DrawerNavigator />
				</NavigationContainer>
			</TailwindProvider>
		</Provider>
	)
}

registerRootComponent(App)

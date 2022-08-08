import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../screens/Home'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Home" component={Home} />
		</Drawer.Navigator>
	)
}

export default DrawerNavigator

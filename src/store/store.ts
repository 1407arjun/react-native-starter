import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/root'

const store = configureStore({
	reducer: {
		root: rootReducer
	}
})

export default store

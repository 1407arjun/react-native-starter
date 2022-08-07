import { combineReducers } from 'redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// const rootReducer = combineReducers({
// 	user,
// 	projects,
// 	code
// })

const rootReducer = createSlice({
	name: 'root',
	initialState: { isError: false },
	reducers: {
		setState(state, action: PayloadAction<boolean>) {
			const { type, payload } = action
			state.isError = payload
		}
	}
})

export const { setState } = rootReducer.actions
export default rootReducer.reducer

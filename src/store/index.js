import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducers'

const messageLogger = store => next => action => {

	let result

	console.groupCollapsed(`Dispatching action ==> ${action.type}`)
	console.log('before total ski days:', store.getState().allSkiDays.length)
	console.log('before goal was: ', store.getState().goal)
	console.log('before fetching was: ', store.getState().resortNames.fetching)

	result = next(action)

	const { allSkiDays, goal, resortNames, errors } = store.getState()

	console.log(`
		After total ski days: ${allSkiDays.length}
		After the goal is: ${ goal }
		After fetching status: ${resortNames.fetching}
		After fetching suggestions: ${resortNames.suggestions}
		Total suggestions: ${resortNames.suggestions.length}
		ERRORS OCCURRED: ${errors}
	`)
	console.groupEnd()

	return result
}

export default (initialState = {}) => {
	return applyMiddleware(thunk, messageLogger)(createStore)(appReducer, initialState)
}
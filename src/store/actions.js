import C from '../constants'
import fetch from 'isomorphic-fetch'

export const addDay = (resort, date, powder=false, backcountry=false) => (
	{	type: C.ADD_DAY,
		payload: { resort, date, powder, backcountry}
	}
)

export const removeDay = (date) => ({
	type: C.REMOVE_DAY,
	payload: date
})

export const setGoal = (goal) => ({
	type: C.SET_GOAL,
	payload: goal
})

export const addError = (error) =>({
	type: C.ADD_ERROR,
	payload: error
})

export const clearError = (index) => ({
	type: C.CLEAR_ERROR,
	payload: index
})

export const changeSuggestions = (suggestions) => ({
	type: C.CHANGE_SUGGESTIONS,
	payload: suggestions
})

export const clearSuggestions = () => ({
	type: C.CLEAR_SUGGESTIONS
})

export const randomGoal = () => (dispatch, getState) => {
	if (!getState().resortNames.fetching) {
		dispatch({type: C.FETCH_RESORT_NAMES})
		setTimeout( () => dispatch({type: C.CANCEL_FETCHING}) , 3000)
	}
}

export const suggestResortNames = value => dispatch => {
	dispatch({type: C.FETCH_RESORT_NAMES})

	fetch('http://localhost:3333/resorts/' + value)
		.then( response => response.json())
		.then( results => dispatch(changeSuggestions(results)))
		.catch(error => {
			dispatch(addError(error))
			dispatch({
				type: C.CANCEL_FETCHING
			})
		})
}
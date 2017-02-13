import storeFactory from './store'
import expect from 'expect'
import { 
	suggestResortNames
 } from './store/actions'

const initalState = (localStorage['redux-store']) ?
						JSON.parse(localStorage['redux-store']) :
						{}

const saveState = () => {
	const state = store.getState()
	localStorage['redux-store'] = state
}

let store = storeFactory(initalState)

store.dispatch(suggestResortNames('abe'))
import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addDay, suggestResortNames, clearSuggestions } from '../../actions'

const mapStateToProps = (state, props) => ({
	suggestions: state.resortNames.suggestions,
	router: props.router,
	fetching: state.resortNames.fetching
})

const mapDispatchToProps = dispatch => {
	return {
		onNewDay({resort, date, powder, backcountry}){
			dispatch(addDay(resort, date, powder, backcountry))
		},
		onChange(value){
			(value) ?
				dispatch(suggestResortNames(value)) :
				dispatch(clearSuggestions())
		},
		onClear(){
			dispatch(clearSuggestions())
		}
	}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

export default withRouter(Container)
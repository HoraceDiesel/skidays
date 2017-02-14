import ShowErrors from '../ui/ShowErrors'
import { clearError } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		errors: state.errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClearError(index) {
			dispatch(clearError(index))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors)

// export default () =>
// 	<ShowErrors errors={['sample error']}
// 						  onClearError={index => console.log('todo: clear error at', index)} />

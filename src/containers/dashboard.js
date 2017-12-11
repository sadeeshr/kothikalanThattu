/**
|--------------------------------------------------
| Dashboard Page Container
|--------------------------------------------------
*/
import Dashboard from '../components/dashboard'
/**
 * actions, reducers bindings
 */
import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/**
 * map state, actions to props
 */
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
const mapActionsToProps = (dispatch) => { return bindActionCreators(Actions, dispatch) }

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Dashboard))
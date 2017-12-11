/**
|--------------------------------------------------
| Auth Page Container
|--------------------------------------------------
*/
import Auth from '../components/auth'
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
    // console.log("State: ", state)
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
const mapActionsToProps = (dispatch) => { return bindActionCreators(Actions, dispatch) }

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Auth))
/**
 * export auth Reducers
 */

const auth = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                isAuthenticated: true
            }

        case 'AUTH_FAIL':
            return {
                ...state,
                isAuthenticated: false
            }

        default:
            return {isAuthenticated : false}
    }

}

export default auth
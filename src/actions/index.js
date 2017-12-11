/**
 * Export Actions
 */
// export const _login = () => {
//     console.log("Login Action")
//     return (dispatch) => {
//         return dispatch({
//             type: "LOGIN",
//             // payload: doRegister()
//         })
//     }
// }

export const authSuccess = () => ({
    type: 'AUTH_SUCCESS'
})

export const authFail = () => ({
    type: 'AUTH_FAIL'
})
export function signinUser ({ email, password }) {
  // using redux thunk and function gives direct access to dispatch, where you can perform intermediary logic before hitting the reducers
  return function (dispatch) {
    // Submit email/password to server

    // If request is good

    // Update state to indicate user is auth'd
    // Save the JWT
    // Redirect to the route "/feature"

    // If request is bad
    // Show an error
  }
}

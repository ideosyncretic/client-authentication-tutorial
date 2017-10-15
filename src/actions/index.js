import axios from 'axios'

const ROOT_URL = 'http://localhost:3090'

export function signinUser ({ email, password }) {
  // using redux thunk and function gives direct access to dispatch, where you can perform intermediary logic before hitting the reducers.
  // it is automatically called
  return function (dispatch) {
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })

    // If request is good

    // Update state to indicate user is auth'd
    // Save the JWT
    // Redirect to the route "/feature"

    // If request is bad
    // Show an error
  }
}

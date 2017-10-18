import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_USER,
  AUTH_ERROR
} from './types'

const ROOT_URL = 'http://localhost:3090'

export function signinUser ({ email, password }) {
  // using redux thunk and function gives direct access to dispatch, where you can perform intermediary logic before hitting the reducers.
  // it is automatically called
  return function (dispatch) {
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // Save the JWT
        localStorage.setItem('token', response.data.token)
        // Redirect to the route "/feature"
        browserHistory.push('/feature')
        // Update state to indicate user is auth'd
        dispatch({ type: AUTH_USER })
      })
      .catch(() => {
        // If request is bad...
        // Show an error
        dispatch(authError('Your email or password is incorrect.'))
      })
  }
}

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

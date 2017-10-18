import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signup extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field
            name="email"
            component={renderInput}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field
            name="password"
            type="password"
            component={renderInput}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm password:</label>
          <Field
            name="passwordConfirm"
            type="password"
            component={renderInput}
          />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}

const renderInput = field => {
  const { input, type, meta: { error, touched } } = field
  return (
    <div>
      <input {...input} type={type} className="form-control" />
      { error && touched && <div className="error">{error}</div> }
    </div>
  )
}

function validate (value) {
  const errors = {}
  const { email, password, passwordConfirm } = value

  if (!email) {
    errors.email = 'Please enter an email'
  }

  if (!password) {
    errors.password = 'Please enter a password'
  }

  if (!passwordConfirm) {
    errors.passwordConfirm = 'Please confirm your password'
  }

  if (password !== passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match'
  }
  return errors
}

export default reduxForm(
  {
    form: 'signup',
    validate
  }
)(Signup)

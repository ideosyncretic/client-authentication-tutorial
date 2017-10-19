import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signup extends Component {
  handleSignup (formData) {
    // call action creator to sign up the user
    this.props.signupUser(formData)
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSignup.bind(this))}>
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
        {this.renderAlert()}
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

function validate (formData) {
  const errors = {}
  const { email, password, passwordConfirm } = formData

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

function mapStateToProps (state) {
  return { errorMessage: state.auth.error }
}

Signup = connect(mapStateToProps, actions)(Signup)
Signup = reduxForm({
  form: 'signup',
  validate
}, mapStateToProps, actions)(Signup)

export default Signup

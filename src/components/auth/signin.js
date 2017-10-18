import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signin extends Component {
  handleFormSubmit ({ email, password }) {
    console.log(email, password)
    // do something to sign user in
    this.props.signinUser({ email, password })
  }

  renderAlert() {
    if (this.props.errorMessage) {
      console.log(this.props.errorMessage)
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
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>Email:</label>
          <Field
            name="email"
            type="email"
            component={renderInput}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <Field
            name="password"
            type="password"
            component={renderInput}
          />
        </div>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

const renderInput = field => {
  const { input, type } = field
  return (
    <div>
      <input {...input} type={type} className="form-control" />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    form: state.form,
    errorMessage: state.auth.error
  }
}

Signin = connect(mapStateToProps, actions)(Signin)
Signin = reduxForm({
  form: 'signin'
})(Signin)

export default Signin

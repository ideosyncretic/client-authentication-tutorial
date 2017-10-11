import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class Signin extends Component {
  handleFormSubmit ({ email, password }) {
    console.log(email, password)
    // do something to sign user in
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
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return { form: state.form }
}

const renderInput = field => {
  const { input, type } = field
  return (
    <div>
      <input {...input} type={type} className="form-control" />
    </div>
  )
}

Signin = connect(mapStateToProps, null)(Signin)
Signin = reduxForm({
  form: 'signin'
})(Signin)

export default Signin

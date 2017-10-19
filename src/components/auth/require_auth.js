import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }
    // To prevent abuse of context, you must declare what you want access to.
    // Use the “static” keyword to define a class-level property.
    // This property applies to the entire Authentication class, not just instances of it.

    componentWillMount () {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}

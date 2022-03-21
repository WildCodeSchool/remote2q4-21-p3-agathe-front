import React, {Component} from 'react'

export default function RequireAuthMW(ComposedComponent) {
  class RequireAuth extends Component {
    state = {
      isAuthenticated: false
    }

    // Push to login route if not authenticated on mount
    componentWillMount() {
      if(!this.state.authenticated) {
        // Use your router to redirect them to login page
      }
    }

    // Push to login route if not authenticated on update
    componentWillUpdate(nextProps) {
      if(!this.state.authenticated) {
        // Use your router to redirect them to login page
      }
    }

    // Otherwise render the original component
    render() {
      return <ComposedComponent {...this.props}/>
    }
  }

  return RequireAuth

}
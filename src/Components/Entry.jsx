import React from 'react'

import '../static/app.css'
import Login from './Login'
import Logout from './Logout'

export default class Entry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleLogin(e) {
    e.preventDefault()
    this.setState({loggedIn: !this.state.loggedIn})
    console.log(this.state.loggedIn)
  }

  render() {
    const login = <Login onSubmit={e => this.handleLogin(e)} />
    const logout = <Logout onSubmit={e => this.handleLogin(e)} />
    const userForm = () => this.state.loggedIn ? login : logout
    return (
      <div>{userForm()}</div>
    )
  }
}

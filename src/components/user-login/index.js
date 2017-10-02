import React, { Component } from 'react'

import LoginForm from './login-form'

const storeToken = token => { localStorage.setItem('gudfitesAccessToken', token) }
export default class UserLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      loginError: false
    }

    this.handleLogin = this.props.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLoginError = this.handleLoginError.bind(this)
    this._attemptLogin = this._attemptLogin.bind(this)
  }

  render () {
    const { loginError, password } = this.state
    return (
      <div>
        <LoginForm
          loginError={loginError}
          password={password}
          onChange={e => this.handleChange(e)}
          onSubmit={e => this._attemptLogin(e)}
        />
      </div>
    )
  }

  // -------------------------------------------------------------------------

  handleChange(e) {
    this.setState({ password: e.target.value })
  }

  handleLoginError() {
    this.setState({
      loginError: true,
      password: ''
    })
  }

  _attemptLogin (e) {
    e.preventDefault()
    fetch('https://api.gudfites.com/auth', {
      method: 'POST',
      body: new FormData(e.currentTarget)
    })
      .then(res => res.ok
        ? res.json()
        : this.handleLoginError()
      )
      .then(res => {
        storeToken(res.token)

        this.handleLogin(true)
      })
      .catch(console.error)
  }
}

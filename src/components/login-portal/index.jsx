import React from 'react'

import '../../static/app.css'
import LoginForm from './login-form'
import LogoutForm from './logout-form'

const removeToken = () => { localStorage.removeItem('gudfitesAccessToken') }
const storeToken = token => { localStorage.setItem('gudfitesAccessToken', token) }

export default class LoginPortal extends React.Component {
  constructor (props) {
    super(props)

    this._handleLogin = this._handleLogin.bind(this)
  }

  render () {
    console.log(this.props)
    const UserForm = () => this.props.isLoggedIn
      ? <LogoutForm onSubmit={e => this._handleLogin(e)} />
      : <LoginForm onSubmit={e => this._handleLogin(e)} />

    return (
      <div>
        <UserForm />
      </div>
    )
  }

  // -------------------------------------------------------------------------

  _handleLogin (e) {
    e.preventDefault()

    if (this.props.isLoggedIn) {
      this.props.handleLogin(false)

      removeToken()
    } else {
      fetch('https://api.gudfites.com/auth', {
        method: 'POST',
        body: new FormData(e.currentTarget)
      })
        .then(res => res.json())
        .then(res => {
          storeToken(res.token)

          this.props.handleLogin(true)
        })
        .catch(console.error)
    }
  }
}

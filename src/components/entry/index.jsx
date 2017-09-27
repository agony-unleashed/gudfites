import React from 'react'

import '../../static/app.css'
import Login from './login'
import Logout from './logout'

const removeToken = () => { localStorage.removeItem('gudfitesAccessToken') }
const storeToken = token => { localStorage.setItem('gudfitesAccessToken', token) }

export default class Entry extends React.Component {
  constructor (props) {
    super(props)

    this._handleLogin = this._handleLogin.bind(this)
  }

  render () {
    console.log(this.props)
    const UserForm = () => this.props.isLoggedIn
      ? <Logout onSubmit={e => this._handleLogin(e)} />
      : <Login onSubmit={e => this._handleLogin(e)} />

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

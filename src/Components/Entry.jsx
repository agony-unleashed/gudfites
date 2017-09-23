import React from 'react'

import '../static/app.css'
import Login from './Login'
import Logout from './Logout'

const removeToken = () => { localStorage.removeItem('gudfitesAccessToken') }
const storeToken = token => { localStorage.setItem('gudfitesAccessToken', token) }

export default class Entry extends React.Component {
  constructor (props) {
    super(props)

    this.state = { loggedIn: false }

    this.handleLogin = this.handleLogin.bind(this)
  }

  render () {
    console.log('state', this.state)

    const UserForm = () => this.state.loggedIn
      ? <Logout onSubmit={e => this.handleLogin(e)} />
      : <Login onSubmit={e => this.handleLogin(e)} />

    return (
      <div>
        <UserForm />
      </div>
    )
  }

  // -------------------------------------------------------------------------

  handleLogin (e) {
    e.preventDefault()

    if (this.state.loggedIn) {
      this.setState({ loggedIn: false })

      removeToken()
    } else {
      fetch('https://api.gudfites.com/auth', {
        method: 'POST',
        body: new FormData(e.currentTarget)
      })
        .then(res => res.json())
        .then(res => {
          storeToken(res.token)

          this.setState({ loggedIn: true })
        })
        .catch(console.error)
    }
  }
}

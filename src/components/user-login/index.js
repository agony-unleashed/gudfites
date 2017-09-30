import React from 'react'

import LoginForm from './login-form'

export default function UserLogin ({ handleLogin }) {
  const storeToken = token => { localStorage.setItem('gudfitesAccessToken', token) }

  return (
    <div>
      <LoginForm onSubmit={e => _attemptLogin(e)} />
    </div>
  )

  // -------------------------------------------------------------------------

  function _attemptLogin (e) {
    e.preventDefault()
    fetch('https://api.gudfites.com/auth', {
      method: 'POST',
      body: new FormData(e.currentTarget)
    })
      .then(res => res.json())
      .then(res => {
        storeToken(res.token)

        handleLogin(true)
      })
      .catch(console.error)
  }
}

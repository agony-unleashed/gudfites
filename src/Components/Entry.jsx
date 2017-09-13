import React from 'react'

import DataPicker from './DataPicker'

export default function Entry() {
  function handleLogin(e) {
    // e.preventDefault()
    // TODO: login
    const fakeToken = 'token'
    window.localStorage.setItem('accessToken', fakeToken)
    console.log(window.localStorage.getItem('accessToken'))
  }
  return (
    <div>
      <h1>Gudfites</h1>
      <form onSubmit={e => handleLogin(e)} name="login">
        <input type="password" name="password" placeholder="FAKE password" required />
        <button>Access</button>
      </form>
    </div>
  )
}

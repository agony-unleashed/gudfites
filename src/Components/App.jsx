import React from 'react'

import Entry from './Entry'
import DataPicker from './DataPicker'

export default function App() {
  // TODO: secure connect to server / implement token access
  function logout(e) {
    window.localStorage.setItem('accessToken', null)
    console.log(window.localStorage.getItem('accessToken'))
  }
  const token = window.localStorage.getItem('accessToken')
  console.log(token)
  if (token === 'token') {
    return (
      <div>
        <DataPicker />
        <form onSubmit={e => logout(e)}><button>Logout</button></form>
      </div>
    )
  } else {
    return <Entry />
  }
}

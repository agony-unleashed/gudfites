import React from 'react'

import Entry from './Entry'
import DataPicker from './DataPicker'

export default function App() {
  // TODO: secure connect to server / implement token access
  const token = window.localStorage.getItem('accessToken')

  function logout(e) {
    window.localStorage.setItem('accessToken', null)
  }

  if (token === 'token') {
    return (
      <div>
        <form onSubmit={e => logout(e)}><button>Logout</button></form>
        <DataPicker />
      </div>
    )
  } else {
    return <Entry />
  }
}

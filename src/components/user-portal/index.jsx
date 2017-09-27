import React from 'react'

import LogoutForm from './logout-form'

export default function UserPortal ({ handleLogout }) {
  const removeToken = () => { localStorage.removeItem('gudfitesAccessToken') }

  return (
    <LogoutForm onSubmit={e => _handleLogout(e)} />
  )

  // -------------------------------------------------------------------------

  function _handleLogout (e) {
    e.preventDefault()
    handleLogout(false)
    removeToken()
  }
}

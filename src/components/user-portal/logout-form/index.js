import React from 'react'

import '../../../static/logout-form.css'

export default function LogoutForm ({ onSubmit }) {
  return (
    <form className="logout-form" onSubmit={onSubmit} name='login'>
      <button>Logout</button>
    </form>
  )
}

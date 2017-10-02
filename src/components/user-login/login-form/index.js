import React from 'react'

import '../../../static/login-form.css'

export default function LoginForm ({ onChange, onSubmit, loginError, password }) {
  return (
    <form className="text-center" onSubmit={onSubmit} name='login'>
      <input
        className={ loginError ? 'login-error' : '' }
        onChange={onChange}
        type='password'
        name='password'
        placeholder={ loginError ? 'wrong password' : 'password...' }
        value={password}
        required
      />

      <button>Access</button>
    </form>
  )
}

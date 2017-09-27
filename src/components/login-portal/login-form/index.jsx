import React from 'react'

export default function LoginForm ({ onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit} name='login'>
        <input type='password' name='password' placeholder='password' required />

        <button>Access</button>
      </form>
    </div>
  )
}

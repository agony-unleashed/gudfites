import React from 'react'

export default function Login({ onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit} name="login">
        <button>Logout</button>
      </form>
    </div>
  )
}

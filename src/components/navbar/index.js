import React from 'react'

import '../../static/navbar.css'

export default function Navbar ({ children }) {
  return (
    <nav>
      <ul className="nav-items">
        <li className='nav-title'><a href="/">gudfites</a></li>
        <li className='nav-item-right'>{children}</li>
      </ul>
    </nav>
  )
}

import React from 'react'

import '../../static/app.css'

export default function Navbar (props) {
  return (
    <nav>
      <ul>
        <li className='title'><span>gudfites</span></li>
        <li className='nav-item-right'>{props.children}</li>
      </ul>
    </nav>
  )
}

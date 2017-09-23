import React from 'react'

import '../static/app.css'
import Entry from './Entry'
import DataPicker from './DataPicker'

function App () {
  return (
    <div>
      <nav>
        <ul>
          <li className='title'><span>gudfites</span></li>
          <li className='login'><Entry /></li>
        </ul>
      </nav>

      <DataPicker />
    </div>
  )
}

export default App

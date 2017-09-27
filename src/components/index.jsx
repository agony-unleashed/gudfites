import React, { Component } from 'react'

import '../static/app.css'
import Entry from './entry'
import DataPicker from './data-picker'
import NotLoggedIn from './not-logged-in'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { loggedIn: !!(localStorage.getItem('gudfitesAccessToken')) }

    this.handleLogin = this.handleLogin.bind(this)
  }

  render () {
    return (
      <div>
        <nav>
          <ul>
            <li className='title'><span>gudfites</span></li>

            <li className='login'><Entry isLoggedIn={this.state.loggedIn} handleLogin={this.handleLogin} /></li>
          </ul>
        </nav>

        { this.state.loggedIn
          ? <DataPicker handleLogin={this.handleLogin} />
          : <NotLoggedIn />
        }
      </div>
    )
  }

  handleLogin (isLoggedIn) {
    this.setState({ loggedIn: isLoggedIn })
  }
}

export default App

import React, { Component } from 'react'

import '../static/app.css'
import LoginPortal from './login-portal'
import FitesReport from './fites-report'
import Welcome from './welcome'

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

            <li className='login'><LoginPortal isLoggedIn={this.state.loggedIn} handleLogin={this.handleLogin} /></li>
          </ul>
        </nav>

        { this.state.loggedIn
          ? <FitesReport handleLogin={this.handleLogin} />
          : <Welcome />
        }
      </div>
    )
  }

  handleLogin (isLoggedIn) {
    this.setState({ loggedIn: isLoggedIn })
  }
}

export default App

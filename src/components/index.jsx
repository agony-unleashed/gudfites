import React, { Component } from 'react'

import '../static/app.css'
import Navbar from './navbar'
import UserLogin from './user-login'
import UserPortal from './user-portal'
import FitesReport from './fites-report'
import Welcome from './welcome'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { isLoggedIn: !!(localStorage.getItem('gudfitesAccessToken')) }

    this.handleLoginState = this.handleLoginState.bind(this)
  }

  render () {
    const { isLoggedIn } = this.state
    const ifLoggedIn = (element, altElement) => (isLoggedIn ? element : altElement)
    const Home = () => {
      return (
        <div>
          <Welcome />
          <UserLogin handleLogin={this.handleLoginState} />
        </div>
      )
    }

    return (
      <div>
        <Navbar>{ifLoggedIn(<UserPortal handleLogout={this.handleLoginState} />)}</Navbar>
        {ifLoggedIn(<FitesReport />, <Home />)}
      </div>
    )
  }

  handleLoginState (isLoggedIn) {
    this.setState({ isLoggedIn })
  }
}

export default App

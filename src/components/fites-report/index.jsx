import React from 'react'

import '../../static/fites-report.css'
import RegionKillList from './region-kill-list'

export default class FitesReport extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      'range': '',
      'locale': '',
      'data': {}
    }

    this.handleFetch = this.handleFetch.bind(this)
  }

  render () {
    return (
      <div>
        <form className='fetch-form' onSubmit={e => this.handleFetch(e)}>
          <h1>solo kills by region</h1>

          <select name='range' defaultValue=''>
            <option value='' disabled>Range</option>
            <option value='day'>Past Day</option>
            <option value='week'>Past Week</option>
            <option value='month'>Past Month</option>
            {/* <option value='year'>Past Year</option> */}
          </select>

          <select name='locale' defaultValue=''>
            <option value='' disabled>Zone</option>
            <option value='us'>US</option>
            <option value='eu'>EU</option>
            <option value='au'>AU</option>
          </select>

          <button className='fetch-button'>Fetch</button>
        </form>

        <RegionKillList data={this.state.data.data} />
      </div>
    )
  }

  // -------------------------------------------------------------------------

  handleFetch (e) {
    e.preventDefault()

    const locale = e.target.children.locale.value
    const range = e.target.children.range.value

    const params = {
      zone: locale,
      range
    }

    const _query = Object.keys(params)
      .map(param => `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`)
      .join('&')

    fetch(`https://api.gudfites.com/api/v1/solo?${_query}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('gudfitesAccessToken')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 401) {
          this.props.handleLogin(false)

          throw new Error('...not logged in')
        } else {
          return res
        }
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          data,
          locale,
          range
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
}

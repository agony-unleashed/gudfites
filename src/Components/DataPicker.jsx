import React from 'react'

import RegionKillList from './RegionKillList'

export default class DataPicker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'range': '',
      'locale': '',
      'data': {},
    }
    this.handleFetch = this.handleFetch.bind(this)
  }

  handleFetch(e) {
    e.preventDefault()
    const range = e.target.children[0].value
    const locale = e.target.children[1].value
    console.log('@fetch', locale, range)
    const mockData = {"status":"success","data":[{"_id":{"regionName":"Black Rise"},"total":15},{"_id":{"regionName":"The Forge"},"total":15}]}
    this.setState({
      range,
      locale,
      'data': mockData,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleFetch(e)}>
          <select name="range" required>
            <option value="" disabled selected>Range</option>
            <option value="pastHour">Past Hour</option>
            <option value="pastDay">Past Day</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
          </select>
          <select name="locale" required>
            <option value="" disabled selected>Locale</option>
            <option value="us">US</option>
            <option value="eu">EU</option>
            <option value="au">AU</option>
          </select>
          <button>Fetch</button>
        </form>
        <RegionKillList data={this.state.data.data} />
      </div>
    )
  }
}

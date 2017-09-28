import React from 'react'

import '../../../static/region-kill-list.css'

export default function RegionKillList ({ data }) {
  const listData = () => {
    if (data.length > 0) {
      return (
        data.map(region => (
          <tr key={region._id.regionName}><td>{region._id.regionName}</td><td>{region.total}</td></tr>
        ))
      )
    } else {
      return <tr><td>No Results</td><td /></tr>
    }
  }

  return (
    <table>
      <thead>
        <tr><th>Region</th><th>Kills</th></tr>
      </thead>
      <tbody>
        {listData()}
      </tbody>
    </table>
  )
}

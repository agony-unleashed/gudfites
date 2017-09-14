import React from 'react'

export default function RegionKillList({ data }) {
  function listData() {
    try {
      return (
        data.map(region => (
          <li key={region._id.regionName}>{region._id.regionName} - {region.total}</li>
        ))
      )
    } catch (e) {
      return <h1>No Results</h1>
    }
  }

  return (
    <ul>
      {listData()}
    </ul>
  )
}

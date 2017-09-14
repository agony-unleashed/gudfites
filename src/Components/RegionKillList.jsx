import React from 'react'

export default function RegionKillList({ data }) {
  return (
    <ul>
      {data.map(region => (
        <li key={region._id.regionName}>{region._id.regionName} - {region.total}</li>
      ))}
    </ul>
  )
}

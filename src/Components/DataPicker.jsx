import React from 'react'

export default function DataPicker() {
  function handleFetch(e) {
    e.preventDefault()
    console.log('@fetch', e)
  }

  return (
    <div>
      <form onSubmit={e => handleFetch(e)}>
        <select name="range">
          <option value="" disabled selected>Range</option>
          <option value="pastHour">Past Hour</option>
          <option value="pastDay">Past Day</option>
          <option value="pastWeek">Past Week</option>
          <option value="pastMonth">Past Month</option>
        </select>
        <select name="locale">
          <option value="" disabled selected>Locale</option>
          <option value="us">US</option>
          <option value="eu">EU</option>
          <option value="au">AU</option>
        </select>
        <button>Fetch</button>
      </form>
    </div>
  )
}

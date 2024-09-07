import React from 'react'

export default function Input(props) {
  return (
    <div>
      <p className='input-head'>City name</p>
      <div className='input-div'>
        <input className='city-input' type="text" onChange={e => props.setCity(e.target.value)} />
        <button className='input-btn' onClick={props.handleFetch}>Check</button>
      </div>
    </div>
  )
}

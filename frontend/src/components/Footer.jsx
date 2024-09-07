import React from 'react'

export default function Footer(props) {
  const dateSplit = props.data.location.localtime.split(" ")
  return (
    <div className='footer-div'>
        <div className='lat-lon'>
            <h5>latitude {props.data.location.lat}</h5>
            <h5>longitude {props.data.location.lon}</h5>
        </div>
        <h5>accurate to {dateSplit[0]} at {dateSplit[1]}</h5>
    </div>
  )
}

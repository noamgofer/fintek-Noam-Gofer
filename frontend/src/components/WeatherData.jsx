import React from 'react'

export default function WeatherData(props) {
  const data = props.data
  const forecastday = data.forecast.forecastday
  const hour = forecastday[0].hour
  const dateSplit = data.location.localtime.split(" ")

  return (
    <div className='grey-background'>
      <div className='info-div'>
        <h3 className='city-name'>{data.location.region}</h3>
        <h4 className='country'>{data.location.country}</h4>
        <h4 className='time'>{dateSplit[0]} at {dateSplit[1]}</h4>
        <h1 className='temp-header'>{data.current.temp_c}°</h1>
        <h2 className='condition'>{data.current.condition.text}</h2>
        <div className='middle-row'>

          <div className='middle-row-boxes'>
            <h4>precipitaion</h4>
            <h5>{data.current.precip_mm}mm</h5>
          </div>

          <div className='middle-row-boxes'>
            <h4>humidity</h4>
            <h5>{data.current.humidity}%</h5>
          </div>

          <div className='middle-row-boxes'>
            <h4>wind</h4>
            <h5>{data.current.wind_kph}km/h</h5>
          </div>

        </div>

        <div className='buttom-row'>
          {hour.slice(0,5).map((val,index) => (
             <div key={index} className='buttom-row-boxes'>
              <h5 className='hour'>{val.time.split(" ")[1]}</h5>
              <h5 className='temp'>{val.temp_c}°</h5>
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React from 'react';

const Weather = (props) => {
  return (
    <div className="weather_info">
      {
        props.city && props.country && <p className="weather-title">Location:
          <span className="weather-value"> {props.city}, {props.country}</span></p>

      }
      {
        props.temperature && <p className="weather-title">Temperature:
          <span className="weather-value"> {props.temperature}°</span></p>
      }
      {
        props.high && <p className="weather-title">High:
          <span className="weather-value"> {props.high}°</span></p>
      }
      {
        props.low && <p className="weather-title">Low:
          <span className="weather-value"> {props.low}°</span></p>
      }
      {
        props.humidity && <p className="weather-title">Humidity:
          <span className="weather-value"> {props.humidity}%</span></p>
      }
      {
        props.description && <p className="weather-title">Conditions:
          <span className="weather-value"> {props.description}</span></p>
      }
    </div>
  )
}

export default Weather;

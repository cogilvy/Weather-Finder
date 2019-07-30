import React, { Component } from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "9e379499861fd366ac55d51b4af2efd3"

class App extends Component {

  state = {
    temperature: "",
    high: "",
    low: "",
    city: "",
    country: "",
    humidity: "",
    description: ""  }

  getWeather = (event) => {
    const city = event.target.city.value
    const country = event.target.country.value
    event.preventDefault()

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    .then(res => res.json())
    .then(data => {
      if (city && country && data.message !== "city not found") {
        console.log(data);
        this.setState({
          temperature: data.main.temp,
          high: data.main.temp_max,
          low: data.main.temp_min,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description
        })
      } else if (data.message === "city not found") {
        alert("Either the city our country you entered was not found.")
      }
    })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-6 title-container">
                  <Titles />
                </div>
                <div className="col-6 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather temperature={this.state.temperature} high={this.state.high} low={this.state.low} humidity={this.state.humidity} city={this.state.city} country={this.state.country} description={this.state.description} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

import React, { Component } from 'react';


class WeatherIcon extends Component {

  render() {
    let day_hi = parseFloat(this.props.day_hi)*1.8 + 32;
    let day_lo = parseFloat(this.props.day_lo)*1.8 + 32;
    return(
      <div class="display-column day-slot">
        <p class="day-label"> {this.props.weather_for} </p>
        <img class="weather-icon" src={'https://www.metaweather.com//static/img/weather/' + this.props.outlook + '.svg'} />
        <p class="desc"> {this.props.description} </p>
        <span class="display-row"> <p class="temp-label"> Hi </p> <p class="temp"> {parseInt(day_hi)} </p> </span>
        <span class="display-row"> <p class="temp-label"> Lo </p> <p class="temp"> {parseInt(day_lo)} </p> </span>
      </div>
    )
  }
}

export default WeatherIcon;

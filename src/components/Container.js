import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Results from './Results';
import '../style.css';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      next_date: [],
      day_after: [],
      third_day: [],
      city: undefined,
      sunrise: undefined,
      sunset: undefined
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    let city = e.target.elements.city.value
    let proxy_url = 'https://cors-anywhere.herokuapp.com/'
    e.preventDefault()
    fetch(proxy_url + 'https://www.metaweather.com/api/location/search/?query=' + city)
      .then(response => response.json())
      .then(function(responseData) {
        console.log('woeid is ' + responseData[0].woeid)
        return fetch(proxy_url + 'https://www.metaweather.com/api/location/' + responseData[0].woeid)
      })
      .then(data => data.json())
      .then(weatherData => {
        console.log(weatherData);
        this.setState({
          city: weatherData.title,
          sunrise: weatherData.sun_rise,
          sunset: weatherData.sun_set,
          next_date: weatherData.consolidated_weather[0],
          day_after: weatherData.consolidated_weather[1],
          third_day: weatherData.consolidated_weather[2]
        })
      })
      .catch(error => {
        console.log('Houston, we have a problem: ' + error);
      })
  }

  render() {
    return(
      <div class="container">
        <div clas="row">
          <div class="center-text">
          <h1 id="title"> Welcome to #MyWeatherGenie <i class="fas fa-thermometer-half text-info"></i></h1>
          <h6 class="mt-5 mb-3"> A minimal weather search engine written in ReactJS powered by <a target="_blank" href="https://www.metaweather.com">MetaWeather API</a>. </h6>
          by <b> Bil Erdenekhuyag </b>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-8 col-12 center-content">
            <SearchBox
            getWeather={this.handleSearch}
            showResults={this.unhideResults}
            />
          </div>
        </div>

        <div class="row">
          <div class="col-12 center-content">
            <Results
              city={this.state.city}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              next_day={this.state.next_date}
              second_day={this.state.day_after}
              third_day={this.state.third_day}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Container;

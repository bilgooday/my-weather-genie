import React, { Component } from 'react';
import WeatherIcon from './WeatherIcon';
import $ from 'jquery';


class Results extends Component {

  componentDidUpdate() {
    $('#results-container').fadeIn('slow');
  }

  render() {
    if (this.props.has_response) {
    return(
      <div id="results-container" class="card">
        <div class="card-body center-text">
          <span>
            <p> Here's how it's looking in <b>{this.props.city} </b></p>
          </span>


          <div id="results-set" class="display-row">
                <WeatherIcon
                  outlook={this.props.next_day.weather_state_abbr}
                  description={this.props.next_day.weather_state_name}
                  day_hi={this.props.next_day.max_temp}
                  day_lo={this.props.next_day.min_temp}
                  weather_for={"Tomorrow"}
                />
                <WeatherIcon
                  outlook={this.props.second_day.weather_state_abbr}
                  description={this.props.second_day.weather_state_name}
                  day_hi={this.props.second_day.max_temp}
                  day_lo={this.props.second_day.min_temp}
                  weather_for={"Day After"}
                  />
                <WeatherIcon
                  outlook={this.props.third_day.weather_state_abbr}
                  description={this.props.third_day.weather_state_name}
                  day_hi={this.props.third_day.max_temp}
                  day_lo={this.props.third_day.min_temp}
                  weather_for={"Following Day"}
                  />
          </div>
        </div>
      </div>
    )
  }
  else {
    return(
      <div id="results-container" class="card">
        <div class="card-body center-text">
          <h3 class="text-warning">Results not found - please try another city!</h3>
        </div>
      </div>
    )
  }
  }
}

export default Results;

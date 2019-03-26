import React, { Component } from 'react';


class SearchBox extends Component {

  render() {
    return(
      <div id="search-container" class="card center-text">
        <div class="card-body">
          <div class="col-10 center-content mt-3 mb-3">
            <form class="md-form" onSubmit={this.props.getWeather}>
            <input class="form-control form-control-lg mb-3" type="text" placeholder="Search a City to begin..." aria-label="Search" name="city"/>
            <button class="btn btn-info" type="submit" onClick={this.props.showResults}> Search </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox;

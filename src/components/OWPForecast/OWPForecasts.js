import React, {Component} from 'react';
import moment from 'moment';
import {fetchForecast} from '../../services/OpenWeatherMapFetch';
import ForecastView from './OWPForecastView';

class Forecasts extends Component {
  cityName = 'St Andrews, UK';
  state = {
    loading: false,
    forecast: []
  };

  /*
   sets up the loader whilst waitng for the request to return, the passes bits of the response into the state,
   making it accessible to OWPForecastItems
  */
  async getForecastData() {
    this.setState({loading: true});
    const result = await fetchForecast(this.cityName);
    this.setState({
      loading: false,
      forecast: result.list.map(item => ({
        date: moment(item.dt * 1000),
        temp: item.main.temp,
        weather: item.weather[0]
      }))
    });
  }

  componentWillMount() {
    this.getForecastData();
  }

  render() {
    return (
      <ForecastView
        cityName={this.cityName}
        forecast={this.state.forecast}
        loading={this.state.loading}
      />
    );
  }
}

export default Forecasts;

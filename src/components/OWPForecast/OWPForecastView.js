import React from 'react';
import Loading from '../Loading';
import Item from './OWPForecastItems';
import './OWP.css';

/***
 * @param props set in parent OWPForecasts.  With more time, I'd use a text field with optional geolocation, but there's only four hours allotted.
 * @constructor
 */
const ForecastView = props => (
  <div className="forecast-view">
    <div className="city-name">
      <span>5 Day Forecast for: {props.cityName}</span>
    </div>
    {props.loading ? (
      <Loading/>
    ) : (
      // would really have liked to have broken this into groups by day, but ran out of time.
      <div className="forecast-days">
        <div className="forecast-container">
          {props.forecast.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ForecastView;

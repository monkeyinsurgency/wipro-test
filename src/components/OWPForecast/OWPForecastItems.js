import React from 'react';
// import moment from 'moment';
import './OWP.css';

// let currentDate = null;

// couldn't get this to work - wanted to insert a divider at least, ideally a wrapper on new forecast date
/*const isNewDate = (thisDate) => {
  (currentDate === null) ? currentDate = moment(thisDate) : '';
  let newOrNot = moment(currentDate).isSame(thisDate);
  (newOrNot) ? currentDate = moment(thisDate) : '';
  return newOrNot;
};*/

const forecastItem = props => (
  <div className={`forecast ${props.date.format('M-DD')}`}>
    <div className="date">
      <span className="day">{props.date.format('D MMM YY')}<br /><span className="time">{props.date.format('ha')}</span></span>
    </div>
    <div className="temperature">
      <span>{Math.round(props.temp)}&deg; C</span>
    </div>
    <div className="weather">
      <img alt={props.weather.description} src={`http://openweathermap.org/img/w/${props.weather.icon}.png`} />
      <div className="description">
        <span>{props.weather.description.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}</span>
      </div>
    </div>
  </div>
  // Just couldn't get this to work in time
  //<span><isNewDate date={props.date.format('D MMM YY')} /></span>
);

export default forecastItem;

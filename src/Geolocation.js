import React from 'react';
import {geolocated} from 'react-geolocated';
//import './App.css';

class Geo extends React.Component {
  render () {return (this.props.coords)}
  /*render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ?
          <div className="App">
            <table className="App-intro">
              <tbody>
                <tr>
                  <td>latitude</td>
                  <td>{this.props.coords.latitude}</td>
                </tr>
                <tr>
                  <td>longitude</td>
                  <td>{this.props.coords.longitude}</td>
                </tr>
                <tr>
                  <td>altitude</td>
                  <td>{this.props.coords.altitude}</td>
                </tr>
                <tr>
                  <td>heading</td>
                  <td>{this.props.coords.heading}</td>
                </tr>
                <tr>
                  <td>speed</td>
                  <td>{this.props.coords.speed}</td>
                </tr>
              </tbody>
            </table>
          </div>
          : <div>Getting the location data&hellip; </div>;

  }*/
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Geo);

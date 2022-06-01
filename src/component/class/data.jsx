import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import "../function/menu.css";
import axios from "axios";
class Data extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    temp_min: undefined,
    temp_max: undefined,
    weather: undefined,
  };

  async componentDidUpdate() {
    const D = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.props.name}&&appid=83dd8ddc6d5dc4889ca52b01a7bb8c2a`
    );
    this.setState({
      city: D.data.name,
      country: D.data.sys.country,
      temp: Math.floor(D.data.main.temp - 273.15),
      temp_min: Math.floor(D.data.main.temp_min - 273.15),
      temp_max: Math.floor(D.data.main.temp_max - 273.15),
      weather: D.data.weather[0].main,
    });
  }
  render() {
    {
      if (this.state.city === undefined) {
        return;
      } else {
        return (
          <div className="data">
            <div className="city">
              <p>
                {this.state.city}/{this.state.country}
              </p>
            </div>
            <div className="weather">
              <p>{this.state.weather}</p>
            </div>
            <div className="tem">
              <FaTemperatureHigh className="temperture" />
              <p>{this.state.temp}°c</p>
            </div>
            <div className="hi-low">
              <p>
                {this.state.temp_min}/{this.state.temp_max}°c
              </p>
            </div>
          </div>
        );
      }
    }
  }
}

export default Data;

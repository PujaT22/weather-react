import React, { useEffect, useState } from "react";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
export default function Weather() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(undefined);
  async function handleSubmit(event) {
    event.preventDefault();
    if (searchTerm !== "") {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=8494b1ad77ba6516bc89e287ede99d76&units=metric`;
      const response = await axios.get(apiUrl);
      setWeatherData(response);
      console.log(setWeatherData);
    }
  }

  async function handleCurrent(event) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      event.preventDefault();
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=8494b1ad77ba6516bc89e287ede99d76&units=metric`;
      const response = await axios.get(apiUrl);
      setWeatherData(response);
    });
  }
  async function initializeMyAwesomeApp() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=8494b1ad77ba6516bc89e287ede99d76&units=metric`;
    const response = await axios.get(apiUrl);
    setWeatherData(response);
  }

  useEffect(() => {
    initializeMyAwesomeApp();
  }, []);

  function recordSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="Weather">
      <form className="mb-4 p-2" onSubmit={handleSubmit}>
        <div className="row g-0">
          <div className="col-sm-12">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a city"
                aria-label="Enter a city name"
                onChange={recordSearchTerm}
              />
              <button
                className="btn btn-search"
                type="button"
                onClick={handleSubmit}
                autoComplete="off"
              >
                Search 🔎
              </button>
              <button
                className="btn btn-current"
                type="button"
                onClick={handleCurrent}
              >
                Current
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>
        {weatherData && (
          <div className="container-fluid">
            <h1>{weatherData.data.name} </h1>
            <FormattedDate />
            <div className="row">
              <div className="col-sm-6">
                <div className="clearfix weather-temperature">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
                    alt={weatherData.data.weather[0].description}
                    className="float-left"
                  />
                  <div className="float-left">
                    <WeatherTemperature celcius={weatherData.data.main.temp} />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 d-flex justify-content-center">
                <div className="details mt-3">
                  <h4 className="text-capitalize description">
                    {" "}
                    {weatherData.data.weather[0].description}{" "}
                  </h4>
                  <h4>Humidity: {weatherData.data.main.humidity}%</h4>
                  <h4>Wind: {weatherData.data.wind.speed} km/h</h4>
                </div>
              </div>
            </div>
          </div>
        )}
        {!weatherData && <p>Loading...</p>}
      </div>
      <Forecast />
    </div>
  );
}

import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature float-left">
        <b>{Math.round(props.celcius)}</b>
        <span className="units">
          <a href="/" onClick={displayCelcius} className="active">
            °C
          </a>{" "}
          |{" "}
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature float-left">
        <b>{Math.round(props.celcius * (9 / 5) + 32)}</b>
        <span className="units">
          <a href="/" onClick={displayFahrenheit} className="active">
            °F
          </a>{" "}
          |
          <a href="/" onClick={displayCelcius}>
            °C
          </a>
        </span>
      </div>
    );
  }
}

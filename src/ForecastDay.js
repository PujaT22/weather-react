import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  return (
    <div className="col-sm-2">
      <div className="ForecastDay">
        <div className="row">
          <div className="col-12">
            <div className="week-day-label">{props.day}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="icon-day-label">
              <WeatherIcon
                name="owm"
                iconId={props.id}
                flip="horizontal"
                rotate="90"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="week-day-temps">
              <span className="max-temp">{props.max}°C </span>
              <span className="min-temp">{props.min}°C </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

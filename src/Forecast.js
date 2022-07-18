import React from "react";
import ForecastDay from "./ForecastDay";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container">
        <div className="row">
          <ForecastDay day="MON" id="200" min={12} max={13} />

          <ForecastDay day="TUE" id="300" min={12} max={13} />

          <ForecastDay day="WED" id="500" min={12} max={13} />

          <ForecastDay day="THU" id="300" min={12} max={13} />

          <ForecastDay day="FRI" id="600" min={12} max={13} />

          <ForecastDay day="SAT" id="300" min={12} max={13} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }

  function date() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="Column">
      <div className="Day">{date()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcons code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="Max-Temperature">
        {maxTemp()}º<span className="Min-Temperature"> {minTemp()}º</span>
      </div>
    </div>
  );
}

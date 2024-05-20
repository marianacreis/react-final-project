import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="Current-weather-info">
      <div>
        <h3>{props.data.city}</h3>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
          <li>
            Humidity: {props.data.humidity}%, Wind: {props.data.wind} km/h
          </li>
        </ul>
      </div>
      <div className="Icon-temperature-info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5hKPFq7P0h5H6jabm3BslZxoJ6Kd861MVUGfB4g6jQ&s"
          alt="weather icon"
          className="Weather-icon"
        />
        <h2>{Math.round(props.data.temperature)}</h2>
        <span>ºC</span>
      </div>
    </div>
  );
}

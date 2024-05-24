import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

export default function WeatherInfo(props) {
  return (
    <div className="current-weather-info">
      <div className="weather-info-list">
        <h3 className="city-name">{props.data.city}</h3>
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
      <div className="icon-temperature-info">
        <WeatherIcons code={props.data.iconUrl} />
        <h2 className="current-temperature">
          {Math.round(props.data.temperature)}
          <span className="unit">ºC</span>
        </h2>
      </div>
    </div>
  );
}

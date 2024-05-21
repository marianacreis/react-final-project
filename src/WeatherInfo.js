import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

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
        <WeatherIcons code={props.data.iconUrl} size={120} />
        <h2>{Math.round(props.data.temperature)}</h2>
        <span>ºC</span>
      </div>
    </div>
  );
}

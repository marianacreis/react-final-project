import React from "react";
import "./WeatherForecast.css";
import WeatherIcons from "./WeatherIcons";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "597c40c39084687093b091cd48b366f8";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="Column">
        <div className="Day">Thu</div>
        <div className="WeatherForecast-icon">
          <WeatherIcons code="01d" size={40} />
        </div>
        <div className="Max-Temperature">
          14º
          <span className="Min-Temperature">11º</span>
        </div>
      </div>
    </div>
  );
}

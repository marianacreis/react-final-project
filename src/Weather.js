import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <input type="search" className="search-input"></input>
          <input type="submit" value="Search" className="submit-input"></input>
        </form>
        <div className="Current-weather-info">
          <div>
            <h3>{weatherData.city}</h3>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li>{weatherData.description}</li>
              <li>
                Humidity: {weatherData.humidity}%, Wind: {weatherData.wind} km/h
              </li>
            </ul>
          </div>
          <div className="Icon-temperature-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5hKPFq7P0h5H6jabm3BslZxoJ6Kd861MVUGfB4g6jQ&s"
              alt="weather icon"
              className="Weather-icon"
            />
            <h2>{Math.round(weatherData.temperature)}</h2>
            <span>ºC</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

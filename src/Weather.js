import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [temperature, setTemperature] = useState({});

  function handleResponse(response) {
    console.log(response);
    setTemperature(response.data.main.temp);
  }

  const apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
  let city = "Lisbon";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather">
      <form>
        <input type="search" className="search-input"></input>
        <input type="submit" value="Search" className="submit-input"></input>
      </form>
      <div className="Current-weather-info">
        <div>
          <h3>Lisbon</h3>
          <ul>
            <li>Monday, 7th of September</li>
            <li>Broken Clouds</li>
            <li>Humidity: 70%, Wind: 5.14 km/h</li>
          </ul>
        </div>
        <div className="Icon-temperature-info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5hKPFq7P0h5H6jabm3BslZxoJ6Kd861MVUGfB4g6jQ&s"
            alt="weather icon"
            className="Weather-icon"
          />
          <h2>19</h2>
          <span>ºC</span>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <h2>{Math.round(props.celsius)}</h2>
        <span>
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{Math.round(fahrenheit())}</h2>
        <span>
          <a href="/" onClick={showCelsius}>
            ºC |
          </a>
          ºF
        </span>
      </div>
    );
  }
}

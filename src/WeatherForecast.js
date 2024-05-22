import React from "react";
import "./WeatherForecast.css";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecast() {
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

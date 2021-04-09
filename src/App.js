import React from "react";
import "./App.css";

import sun from "./sunny.png";

/**
 * TODO: how will the user interact with the app?
 * - search field?
 * - user location detection
 * - start small, scale up
 * TODO:
 * - parent: CurrentWeather and Date
 * - child: CurrentCity
 * - child: CurrentDetails
 * - child: ToggleDegrees
 * - child: WeeklyForecast
 * TODO: next steps:
 * - get our openweather api key
 * - build out UI
 */

const App = () => {
  return (
    <div className="App">
    <header className="App-header">
      <div className="current-weather">
        {/* left side of CurrentWeather */}
        <h2>Current Weather</h2>
        <div className="wrapper">
          <div className="image-detail-col">
            <h3>Paris</h3>
            <div className="img-container">
              <img src={sun} alt="sun icon" />
              <p>36</p>
            </div>
            <p className="description">Clear sky</p>
          </div>

          <div className="text-detail-col">
            <p className="feels-like">Feels like 34</p>
            <div className="high-low-container">
              <p className="high-temp">
                <span className="high-temp-icon"></span>
                37
              </p>
              <p className="low-temp">
                <span className="low-temp-icon"></span>
                34
              </p>
            </div>
            <p>
              <span className="hum-icon" alt="water droplet icon"></span>{" "}
              Humidity <span className="hum-pct">23%</span>
            </p>
            <p>
              <span className="wind-icon" alt="wind icon"></span> Wind{" "}
              <span className="wind-spd">9kph</span>
            </p>
            <p>
              <span className="circle-icon"></span> Pressure{" "}
              <span className="pressure-unit">1017hPa</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  </div>
  );
};

export default App;

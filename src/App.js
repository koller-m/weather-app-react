import axios from 'axios';
import { useState } from 'react';

function App() {
  // Left off 20:00
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Denver</p>
          </div>
          <div className="temp">
            <h1>60 F</h1>
          </div>
          <div className="description">
            <p>Sunny</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65 F</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p>10%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>10 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import axios from 'axios';
import { useState } from 'react';

function App() {
  // Left off 12:00
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <p>Denver</p>
        </div>
        <div className="temp">
          <h1>60 F</h1>
        </div>
        <div className="description">
          <p>Sunny</p>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65 F</p>
          </div>
          <div className="humidity">
            <p>10%</p>
          </div>
          <div className="wind">
            <p>10 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

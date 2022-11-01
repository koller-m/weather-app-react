import axios from 'axios';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('')

  const cityURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=HhZNFDQE6xUAxBSeWc9AsUGTlPSqsb1e&q=${location}`

  const getCity = (e) => {
    if (e.key === 'Enter') {
      axios.get(cityURL)
      .then((res) => {
        return res.data[0].Key
      })
      .then((id) => {
        return axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=HhZNFDQE6xUAxBSeWc9AsUGTlPSqsb1e`)
      })
      .then((res) => {
        console.log(res.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input 
        type="text" 
        value={location}
        onChange={(e) => {
          setLocation(e.target.value)
        }}
        onKeyDown={getCity}
        placeholder="Enter Location"
        />
      </div>
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

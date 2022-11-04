import axios from 'axios';
import { useState } from 'react';
import { WEATHER_API_KEY } from './apikey';

function App() {
  const [location, setLocation] = useState('')
  const [cityName, setCityName] = useState('')
  const [temp, setTemp] = useState('')
  const [forecast, setForecast] = useState('')
  const [feelsLike, setFeelsLike] = useState('')
  const [humidity, setHumidity] = useState('')
  const [wind, setWind] = useState('')
  const [show, setShow] = useState(false)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${WEATHER_API_KEY}`

  const listenFunc = (e) => {
    if (e.key === 'Enter') {
      getData()
      setShow(true)
    }
  }

  const getData = async () => {
    const response = await axios.get(url)
    setCityName(response.data.name)
    setTemp(response.data.main ? response.data.main.temp.toFixed() : null)
    setForecast(response.data.weather ? response.data.weather[0].main : null)
    setFeelsLike(response.data.main ? response.data.main.feels_like.toFixed() : null)
    setHumidity(response.data.main ? response.data.main.humidity : null)
    setWind(response.data.wind ? response.data.wind.speed.toFixed() : null)
    setLocation('')
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
        onKeyDown={listenFunc}
        placeholder="Enter City"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{cityName}</p>
          </div>
          <div className="temp">
            <h1>{temp} {show && <span>°F</span>}</h1>
          </div>
          <div className="description">
            <p>{forecast}</p>
          </div>
        </div>
        {show &&
          <div className="bottom">
            <div className="feels">
              <p>{feelsLike} <span>°F</span></p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p>{humidity}<span>%</span></p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p>{wind} <span>MPH</span></p>
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;

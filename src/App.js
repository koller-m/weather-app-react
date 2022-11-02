import axios from 'axios';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('')
  const [cityName, setCityName] = useState('')
  const [temp, setTemp] = useState('')
  const [forecast, setForecast] = useState('')
  const [feelsLike, setFeelsLike] = useState('')
  const [humidity, setHumidity] = useState('')
  const [wind, setWind] = useState('')
  const [show, setShow] = useState(false)

  const cityURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=HhZNFDQE6xUAxBSeWc9AsUGTlPSqsb1e&q=${location}`

  const listenFunc = (e) => {
    if (e.key === 'Enter') {
      getData()
      setShow(true)
    }
  }

  const getData = async () => {
    const cityResponse = await axios.get(cityURL)
    const cityData = cityResponse.data[0]
    setCityName(cityData.EnglishName)
    const cityID = cityData.Key
    const weatherData = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityID}?apikey=HhZNFDQE6xUAxBSeWc9AsUGTlPSqsb1e&details=true`)
    setTemp(weatherData.data[0].Temperature.Imperial.Value)
    setFeelsLike(weatherData.data[0].RealFeelTemperature.Imperial.Value)
    setForecast(weatherData.data[0].WeatherText)
    setHumidity(weatherData.data[0].RelativeHumidity)
    setWind(weatherData.data[0].WindGust.Speed.Imperial.Value)
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
        placeholder="Enter Location"
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
        <div className="bottom">
          <div className="feels">
            <p>{feelsLike} {show && <span>°F</span>}</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p>{humidity}{show && <span>%</span>}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>{wind} {show && <span>MPH</span>}</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

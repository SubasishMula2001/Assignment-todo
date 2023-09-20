import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
 
  const apiKey ='056dc6a709945e7134c7ef18dcbd4352';

  // const apiKey = (process.env.REACT_API_KEY);
  //  alert(apiKey);

  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setWeatherData(data))
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [city, apiKey]);

  return (
    <div className='weather-container'>
      <h2>Weather Information</h2>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData.main && (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {(weatherData.main.temp-273.15).toFixed(2)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        
        </div>
      )}
    </div>
  );
}

export default Weather;

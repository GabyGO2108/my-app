import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function Weather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.wind.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "49851ccf9dc7b43010c95070e54f87e8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(Weather);
  }

  function update(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Enter city"
        autoFocus={true}
        onChange={update}
      />
      <input type="submit" value="Search" className= "btn btn-primary w-100" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        
          Temperature: {Math.round(weather.temperature)}°C
          Description: {weather.description}
          Humidity: {weather.humidity}%
          Wind: {weather.wind}km/h
        

        <img src={weather.icon} alt={weather.description} />
      </div>
    );
  } else {
    return form;
  }
}

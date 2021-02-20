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
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

 

  

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "49851ccf9dc7b43010c95070e54f87e8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(Weather);
  }
     function searchCity(city) {
  let apiKey = "49851ccf9dc7b43010c95070e54f87e8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(Weather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-demand").value;
  searchCity(city);
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let apiKey = "49851ccf9dc7b43010c95070e54f87e8";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(Weather);

  url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(displayForecast);
  }
  function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecasttemperaure = null;

  for (let index = 0; index < 5; index++) {
    let forecasttemperature = response.data.list[index];
    forecastElement.innerHTML += ` 
<div class="col-2">

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
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
         <li>Description: {weather.description}</li> 
         <li> Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          
        </ul>
        

        <img src={weather.icon} alt={weather.description} />
      </div>
    );
  } else {
    return form;
  }
}

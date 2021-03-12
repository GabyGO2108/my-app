import React, { useState } from "react";
import "./Weather.css";
import Weathericon from "./Weathericon";
import Weathertenperature from "./Weathertemperature";
import Weatherforecast from "./Weatherforecast";
import axios from "axios";

export default function Search() {
const [ready, setReady] = useSate(false);  
const [city, setCity] = useState("");
const [loaded, setLoaded] = useState(false);
const [weather, setWeather] = useState({});
    
    

  
  function handleSearch(event) {
    event.preventDefault();
      let apiKey = "49851ccf9dc7b43010c95070e54f87e8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(Weather);
  }

  function update(event) {
    setCity(event.target.value);
    }
    
    function handleResponse(response) {
        let city = "Tokyo";
         const apiKey = "49851ccf9dc7b43010c95070e54f87e8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);   
    }

  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Enter city"
        autoFocus={true}
        onChange={update}
          />
         
              <input type="submit" value="Search" class="btn btn-primary w=50" />
              
    </form>
          
  );
  <h2 className="city"> {Weather.city} </h2>
  
  function Weather(response) {
      const [weatherData, setweatherData] = useState({ready : false})
        setReady(true);    
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description, 
      date: new Date (response.data.dt * 1000),
      icon: response.data.weather[0].icon
    });
  }
  
  <h3><FormatDate date = {Weather.date} /> </h3>

  if (weatherData.ready) {
      return (
        
      <div>
              {form}
              
          <div className="float-left">
            <Weathertemperature  celcius={props.data.temperature} />
      
          </div>
            
            <div className="col-6">
            <ul>    
          <li> Humidity: {weather.humidity}%</li>
          <li> Wind: {weather.wind}km/h </li>
                  <li className="text-capitalize">Description: {weather.description}</li>
                  </ul >
              </div>
        
          <div className="row mt-3" >
            <div className="col-6">
              <div className="clearfix">
                <div className="float-left">
                  
                  <Weathericon code={props.data.icon} />
                  <Weatherforecast city={weather.city}/>
                 
                  </div>
              </div>
              </div>
              
          </div>
          </div>
             
          
    );
  } else {
    let city = "Tokyo";
    const apiKey = "49851ccf9dc7b43010c95070e54f87e8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

    return "Loading..."  
    }

}
  



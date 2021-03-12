import React, { useState } from "react";
import Weatherforecast from "./Weatherforecast";
import axios from "axios";


export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecast data={forecast.list[0]} />
        <WeatherForecast data={forecast.list[1]} />
        <WeatherForecast data={forecast.list[2]} />
        <WeatherForecast data={forecast.list[3]} />
        <WeatherForecast data={forecast.list[4]} />
        <WeatherForecast data={forecast.list[5]} />
      </div>
    );
  } else {
      let apiKey = "49851ccf9dc7b43010c95070e54f87e8";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
   

    

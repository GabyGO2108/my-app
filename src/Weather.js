import React, { useState } from "react";

import axios from "axios";

export default function Search (props) {
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    if (temperature) {
      return (
        <h2>
          The temperature in {props.city} is {Math.round(temperature)} °C
        </h2>
      );
    } else {
      let apiKey = "49851ccf9dc7b43010c95070e54f87e8";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(showTemperature);
      setTemperature(response.data.main.temp);
    }
    return <h2>Loading temperature for {props.city}...</h2>;
  }
}




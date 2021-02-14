import React, { useState } from "react";

import axios from "axios";
let today = new Date();
let h4 = document.querySelector("h4");

let date = today.getDate();
let hours = today.getHours();
let minutes = today.getMinutes();
let year = today.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[today.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

let root = "https://api.openweathermap.org";
let apiKey = "49851ccf9dc7b43010c95070e54f87e8";

let month = months[today.getMonth()];
h4.innerHTML = `${day} ${month} ${date}, ${hours}: ${minutes}, ${year}`;

export default function Search (props) {
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    if (temperature) {
      return (
        <h3>
          The temperature in {props.city} is {Math.round(temperature)} °C
        </h3>
      );
    } else {
      let apiKey = "49851ccf9dc7b43010c95070e54f87e8";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(showTemperature);
      setTemperature(response.data.main.temp);
    }
    return <h3>Loading temperature for {props.city}...</h3>;
  }
}




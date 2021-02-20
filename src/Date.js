import React from "react";

export default function Date() {
    let today = new Date();
let h5 = document.querySelector("h5");

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
    
    let month = months[today.getMonth()];
    h5.innerHTML = `${day} ${month} ${date}, ${hours}: ${minutes}, ${year}`;

    let forecasthours = null;
    <h6>${formatHours(forecasthours.dt * 1000)}</h6>



  



}


}
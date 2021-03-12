import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />

        <footer> <small>
           Open-sourced on {" "}
      <a href="https://github.com/GabyGO2108/my-app"  target="_blank">
        GitHub 
      </a> {" "}
       by Gaby Gutiérrez-Olguín
    </small></footer>


      </div>
      </div>


  
  );
}



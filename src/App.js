
import Search from "./Search";
import './Weather.css';
import './App.css';

export default function Wetaher() {
  return (
     
    <div className="weather-app">
      <div>
       
        <h1>
          Weather app
        </h1>
        
        <Search />
      
      </div>
    

    <div className="row">
       <h3> <span class="temperature" id="temperature"></span
            ><span class="units">
              <small> <a href="#" id="celsius-link">°C</a> |
              <a href="#" id="fahrenheit-link">°F</a>
          </small> </span>
          </h3>
        
         
         <footer> <small>
      <a href="https://github.com/GabyGO2108" rel="noreferrer" target="_blank">
        Open source code
      </a>
      by Gaby Gutiérrez
    </small></footer>

   </div>

    </div>
  );
}

export default App;

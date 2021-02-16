
import Search from "./Search";
import './Weather.css';
import './App.css';

export default function Wetaher () {
  return (
     
    <div className="weather-app">
      <div>
       
        <h1>
          Weather app
        </h1>
        
        <Search />
      
      </div>
      <ul>
      <h2> Tokyo</h2>
      <li> Tuesday 07:00</li>
        <li>Clear sky</li>
      </ul>
      <div className="row">
      <div className="col-6">
       <div class="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Clear"
              id= "icon"
              
        />
        </div>
        </div>
        </div>
    

      <div className="row mt-3" >
       <h3> <span class="temperature" id="temperature"></span
            ><span class="units">
              <small> <a href="#" id="celsius-link">°C</a> |
              <a href="#" id="fahrenheit-link">°F</a>
          </small> </span>
          </h3>
        <h4> </h4>
         
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

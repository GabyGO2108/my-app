
import Search from "./Search";


import './Weather.css';



export default function App () {
  return (
     
    <div className="weather-app">
      <div>
       
        <h1>
          Weather app
        </h1>
        
        <Search />

        <h2 className="city"> Tokyo </h2>
        <h3>Tuesday 10:00 </h3>

        
     
        
       
      
      </div>
      
      <div className="row">
      <div className="col-6">
       <div class="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Clear sky"
              id= "icon"
              
            />
            
        </div>
        </div>
        </div>
    

      <div className="row mt-3" >
       <h3> 9 <span class="temperature" id="temperature"></span
            ><span class="units">
              <small> <a href="#" id="celsius-link">°C</a> |
              <a href="#" id="fahrenheit-link">°F</a>
          </small> </span>
        </h3>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Precipitation: 3%
          </li>
          <li>
            Humidity: 2%
          </li>
          <li>
            Wind: 4 km/h
          </li>
        </ul>
        <footer> <small>
           Open-sourced on {" "}
      <a href="https://github.com/GabyGO2108/my-app"  target="_blank">
        GitHub 
      </a> {" "}
       by Gaby Gutiérrez
    </small></footer>


      </div>


    </div>
  );
}



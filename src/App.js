
import Search from "./Search";


import './Weather.css';



function App () {
  return (
     
    <div className="weather-app">
      <div>
       
        <h1>
          Weather app
        </h1>
        
        <Search />

        <h2>Tuesday 10:00 </h2>

        <h3 className="city"> Tokyo </h3>
     
        
       
      
      </div>
      <ul>
      
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

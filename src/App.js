
import Search from "./Search";
import './Weather.css';
import FormatDate from './FormatDate';



export default function App () {
  return (
     
    <div className="weather-app">
      <div>
       
        <h1>
          Weather app
        </h1>

        <h2 className="city"> {Weather.city} </h2>
        
        
        <h3><FormatDate date = {Weather.date} /> </h3>

        
     
        
       
      
      </div>
      
      <div className="row">
      <div className="col-6">
       <div class="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Clear sky"
              className="float-left"
              
              
            />
            
        </div>
        </div>
        </div>
    

        <footer> <small>
           Open-sourced on {" "}
      <a href="https://github.com/GabyGO2108/my-app"  target="_blank">
        GitHub 
      </a> {" "}
       by Gaby Gutiérrez
    </small></footer>


      </div>


  
  );
}



import React, { useSatet } from "react";
import WeatherforecastPreview from "./WeatherforecastPreview";
import axios from "axios";
import "./Weatherforecast.css"



export default function Weatherforecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [loaded, setForecast] = useState(null);
    function handleForecastResponse(response) {
        setLoaded(true);
        setForecast(response.data);

    }
    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="Weatherforecast row">
                <WeatherforecastPreview data={forecast.list[0]} />
                <WeatherforecastPreview data={forecast.list[1]} />
                <WeatherforecastPreview data={forecast.list[2]} />
                <WeatherforecastPreview data={forecast.list[3]} />
                <WeatherforecastPreview data={forecast.list[4]} />
                <WeatherforecastPreview data={forecast.list[5]} />          
            </div>   
        );
    } else {
        let apiKey = "49851ccf9dc7b43010c95070e54f87e8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/
    weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecastResponse);
        return null;

    }

    
}
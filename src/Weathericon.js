import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weathericon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "Rain",
        "09n": "Rain",
        "10d": "Rain",
        "10n": "Rain",
        "11d": "Rain",
        "11n": "Rain",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG",

    };

        return (
            <ReactAnimatedWeather
                icon={codeMapping[props.code]}
            color="GREY"
            size={54}
                animate={true} />
              );


    }
    
        
  

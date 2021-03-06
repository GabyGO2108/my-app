import React, { useState } from "react";

export default function Weathertemperature(props) {
    const { unit, setUnit } = useState("celcius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
        
    }
    function convertToCelius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    let fahrenheit = (props.celcius * 9 / 5) + 32;
    
    if (unit === 'celcius') { 
    return (
        <div>
            <span className="temperature">
                Temperature:{Math.round(weather.celcius)}°C
                 </span>
                <span className="unit"> 
                <a href="/" onClick={convertToFahrenheit}>
                    °C </a>
            </span>
            
    
        </div>          
    );
    } else {
        
        return (
            <div>
            <span className="temperature">
                Temperature:{Math.round(weather.fahrenheit)}
                 </span>
                <span className="unit"> °F |{" "}
                <a href="/" onClick={convertToCelcius}>
                    °C </a>
            </span>
            
    
        </div> 
        )
    
    }
}
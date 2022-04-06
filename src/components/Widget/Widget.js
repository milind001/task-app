

import React from 'react';
import './widget.scss';

const Widget = ({widgetData}) => {
    
    const {main, name, sys, weather} = widgetData;
    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@4x.png`;
    var today = new Date();

    return (
    
        <div className="widget">
            <div className="weatherIcon"><img className="city-icon" src={icon} alt={weather[0]["main"]}/></div>
            <div className="weatherInfo">
                <div className="temperature"><span>{Math.round(main.temp)}&deg;</span></div>
                <div className="description">    
                <div className="weatherCondition">{weather[0]["description"]}</div>    
                <div className="place">{name}, <sup>{sys.country}</sup></div>
                </div>
            </div>
            <div className="date">{today.toDateString()}</div>
        </div>
    )
}

export default Widget
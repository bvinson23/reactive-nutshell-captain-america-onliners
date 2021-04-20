// Component that contains a single weather card
// Author: 


import React from "react";
import "./weather.css"
export const WeatherCard = ( {daily, dailyWeather} ) => {
    const weatherTime = (time) =>{
      let myDate = new Date(time*1000)
      let shortend=myDate.toLocaleDateString()
      return shortend
    }
    const temperatureConverter =(kelvin) =>{
      let temperature = (((kelvin-270)*9/5)+32).toFixed(0)
      return temperature
    }
         return (
        <>
      <section className="Weather">
    <h3>Weather</h3>
      {dailyWeather}
      <h4>{weatherTime(daily?.dt)}</h4>
      <p> Today's today we have a high of {temperatureConverter(daily?.temp.max)}&deg;, </p>
      <p>and a low of {temperatureConverter(daily?.temp.min)}&deg;</p>
      <p> Conditions:{daily?.weather[0].description}</p>
      </section>
      </>
    );
  };
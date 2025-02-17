import React, { useEffect, useState } from 'react'

const WeatherApp = () => {

    const [weatherData, setWeatherData] =useState(false);

    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);
            console.log(data.weather[0].icon)
            
            setWeatherData({
                humidity : data.main.humidity,
                temperature : Math.floor(data.main.temp),
                location : data.name,
                windSpeed: data.wind.speed,
                windTemperature: Math.floor(data.wind.temp),
                icon: data.weather[0].icon
            });
        } catch (error) {
            
        }
    }


    useEffect(()=>{
        search("Murang'a");
    },[])
  return (
    <div className='bg-orange-500'>
        humidity:{weatherData.humidity} % <br />

        temperature: {weatherData.temperature} &deg;C <br />

        location: {weatherData.location} <br />

        windSpeed: {weatherData.windSpeed} km/h <br />
    </div>
  )
}

export default WeatherApp

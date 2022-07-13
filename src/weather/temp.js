import React, { useState, useEffect } from "react";
import "./style.css"
import TempratureCard from "./tempratureCard";

const Temp = () => {

    const [searchValue, setSearchvalue] = useState("yokine");
    const [weatherInfo, setWeatherInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ddb807ffb0f7024112a75eb8818bc7c5`;

            const res = await fetch(url);
            const data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { country, sunset } = data.sys;
            const { name: city } = data;
            const { speed: windSpeed } = data.wind;

            //above get data will be stored in one object and that object will be passed to an state variable so that we can access the value out of this  function
            const weatherInfo = { temp, humidity, pressure, weatherMood, country, sunset, city, windSpeed };
            setWeatherInfo(weatherInfo);



        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, []) // dependency array is left empty so that useEffect hook only trigger once, so that effect will be triggered once page is loaded only once


    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search ..." autoFocus id="search" className="searchTerm" value={searchValue} onChange={(e) => setSearchvalue(e.target.value)} />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            {/* temperature card */}
            <TempratureCard weatherInfo={weatherInfo} />
        </>
    )
}

export default Temp;
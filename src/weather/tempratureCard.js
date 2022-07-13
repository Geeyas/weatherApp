import React, { useEffect, useState } from 'react'

const TempratureCard = ({ weatherInfo }) => {
    // converting sunset seconds time into readable time
    let sec = weatherInfo.sunset;
    let miliSec = new Date(sec * 1000);
    // let time = `${miliSec.getHours()} : ${miliSec.getMinutes} `; // if you want to get the time and minutues into same variable then fo it this way
    let timeHours = miliSec.getHours();
    let timeMin = miliSec.getMinutes();

    let weaMood = weatherInfo.weatherMood;

    const [weatherState, setWeatherState] = useState("");

    useEffect(() => {
        if (weaMood) {
            switch (weaMood) {
                case "Clouds": setWeatherState("wi wi-day-cloudy")
                    break;
                case "Clear": setWeatherState("wi wi-day-sunny")
                    break;
                case "Haze": setWeatherState("wi wi-fog")
                    break;
                case "Rain": setWeatherState("wi wi-day-rain")
                    break;

                default: setWeatherState("wi wi-day-sunny")
                    break;
            }
        }
    }, [weaMood]);


    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`${weatherState}`}></i>
                    {/* <i className={"wi wi-fog"}></i> */}
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{weatherInfo.temp}&deg;C</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weatherInfo.weatherMood}</div>
                        <div className="place">{weatherInfo.city}, {weatherInfo.country}</div>
                    </div>
                </div>

                <div className="date">{new Date().toLocaleString()}</div>
                {/* our four column section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside"> {timeHours} : {timeMin} <br />Sunset</p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside"> {weatherInfo.humidity} <br />Humidity</p>
                        </div>
                    </div>
                    <div>
                        <div className="weather-extra-info">
                            <div className="two-sided-section">
                                <p><i className={"wi wi-rain"}></i></p>
                                <p className="extra-info-leftside"> {weatherInfo.pressure} <br />Pressure</p>
                            </div>
                            <div className="two-sided-section">
                                <p><i className={"wi wi-strong-wind"}></i></p>
                                <p className="extra-info-leftside"> {weatherInfo.windSpeed} <br />Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default TempratureCard;
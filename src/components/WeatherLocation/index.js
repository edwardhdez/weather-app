import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, } from './../../constants/weathers';
import './styles.css';

const location = 'Buenos Aires,ar';
const api_key = '63d144ac1b9036b1d84edde2f153e86f';
const api_base_url = 'http://api.openweathermap.org/data/2.5/weather';
const api_weather = `${api_base_url}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 80,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const data = {
            temperature: temp,
            weatherState,
            humidity,
            wind: `${speed} m/s`,
        }
        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather, { mode: 'cors' }).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }

}


export default WeatherLocation;
import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN,
    RAIN,
} from './../../constants/weathers';
import './styles.css';

const location = 'Buenos Aires,ar';
const api_key = '63d144ac1b9036b1d84edde2f153e86f';
const api_base_url = 'https://samples.openweathermap.org/data/2.5/weather';

const api_weather = `${api_base_url}?q=${location}&appid=${api_key}`;



const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 80,
    wind: '10 m/s',
}

const data2 = {
    temperature: 8,
    weatherState: RAIN,
    humidity: 70,
    wind: '15 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Santiago',
            data: data,
        };
    }


    handleUpdateClick = () => {
        console.log("Actualizando");
        this.setState({
            city: 'Santiago!',
            data: data2
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
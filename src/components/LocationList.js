import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Bogota,col"/>
        <WeatherLocation city="Buenos Aires,ar"/>
        <WeatherLocation city="Mexico,mex"/>
        <WeatherLocation city="Barcelona,es"/>
    </div>
);

export default LocationList;


import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const getWeatherLocationComponent = cities => (
    cities.map(city => <WeatherLocation city={city} />)
);

const LocationList = ({ cities }) => (
    <div>
        {getWeatherLocationComponent(cities)}
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};


export default LocationList;


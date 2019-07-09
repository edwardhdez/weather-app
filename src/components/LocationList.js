import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';



const LocationList = ({ cities, onselectLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("Click event");
        onselectLocation(city);
    }

    const getWeatherLocationComponent = cities => (
        cities.map(city =>
            (<WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)} />)
        )
    );

    return (
        <div>
            {getWeatherLocationComponent(cities)}
        </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onselectLocation: PropTypes.func,
};


export default LocationList;


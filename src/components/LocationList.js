import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';



const LocationList = ({ cities, onselectLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("Click event");
        onselectLocation(city);
    }

    const getWeatherLocationComponent = cities => (
        cities.map(city =>
            (<WeatherLocation
                key={city.key}
                city={city.name}
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                data={city.data}
            />)
        )
    );

    return (
        <div className="locationList">
            {getWeatherLocationComponent(cities)}
        </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onselectLocation: PropTypes.func,
};


export default LocationList;


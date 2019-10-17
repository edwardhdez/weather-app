import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';
import { getForecastDataFromCities, getCity } from './../reducers';

class ForecastExtendedContainer extends Component {

    render() {
        const { city, forecastData } = this.props;
        return (

            city &&
            <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: Proptypes.string.isRequired,
    forecastData: Proptypes.array,
};

const mapStateToProps = (state) => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) });
export default connect(mapStateToProps, null)(ForecastExtendedContainer);
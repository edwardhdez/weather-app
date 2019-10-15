import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

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
    forecastData: Proptypes.array.isRequired,
};

const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData });
export default connect(mapStateToProps, null)(ForecastExtendedContainer);
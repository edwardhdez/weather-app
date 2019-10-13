import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';



class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            console.log(`Ciudad actual ${this.props.city}`);
            console.log(`Proxima ciudad ${nextProps}`);

            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }

    }

    updateCity = city => {
       
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast =>
            (<ForecastItem
                key={`${forecast.weekday}${forecast.hour}`}
                weekday={forecast.weekday}
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>));
    }

    renderProgress = () => {
        return <h3>Loading...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Forecast Extended  for {city} </h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>);

    }

}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
import transformForecast from './../services/transformForecast';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

const api_key = '63d144ac1b9036b1d84edde2f153e86f';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
        dispatch(setCity(payload));

        fetch(url_forecast).then(data => {
            return data.json();
        }).then(weather_data => {
            const forecastData = transformForecast(weather_data);
            dispatch(setForecastData({ city: payload, forecastData }));
        });
    };

};
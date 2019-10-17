import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';


const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const SETWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });


const api_key = '63d144ac1b9036b1d84edde2f153e86f';
const url = 'http://api.openweathermap.org/data/2.5/forecast';
const url_weather = 'http://api.openweathermap.org/data/2.5/weather';


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

//`${api_base_url}?q=${city}&appid=${api_key}`;
export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
            fetch(api_weather, { mode: 'cors' }).then(data => {
                return data.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);
                dispatch(setWeatherCity({ city, weather }));

            });
        });
    }
};
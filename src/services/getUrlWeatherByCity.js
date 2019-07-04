import { api_base_url, api_key } from './../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${api_base_url}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;
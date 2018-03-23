import axios from 'axios';

const API_KEY = '85a4e4db1e55f48f84d176283adf910a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// this is the API call:
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('request:', request);

  return{
    type: FETCH_WEATHER,
    payload: request
  }
}

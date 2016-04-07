const API_KEY = '8b71ddd7c70fd824c2313fdf9d4f5cec';
import axios from 'axios'
//below is using template strings
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER'
//whenever this function is called it will always provide a city
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	console.log('requesting weather')
	const request = axios.get(url)

	return{
		type: 'FETCH_WEATHER',
		payload: request
	}
}

//its better to have  constants for type's in actions

//Middleware intro
//middleware take actions and depending on payload
//It may let it pass through, make changes to it, or reject it

//we only change app state through ap
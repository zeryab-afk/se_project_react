// src/utils/weatherApi.js
// CHANGED: Import checkResponse function
import { checkResponse } from './Api';

export const getWeather = ({ latitude, longitude }, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
  )
  // CHANGED: Use checkResponse instead of repeating logic
  .then(checkResponse);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { 
    F: Math.round(data.main.temp),
    C: Math.round((data.main.temp - 32) * 5/9)
  };
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys);
  result.type = getWeatherType(result.temp.F);
  return result;
};

const isDay = ({ sunrise, sunset }) => {
  const now = Date.now();
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature <= 86) {
    return "warm";
  } else {
    return "cold";
  }
};
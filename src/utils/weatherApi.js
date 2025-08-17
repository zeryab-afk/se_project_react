export const getWeather = ({ latitude, longitude }, APIKEY) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.condition = data.weather[0].main.toLowerCase();
  result.day = isDay(data.sys, Date.now());
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


export const getWeather = ({ latitude, longitude }, apiKey) => {
  // Add &units=imperial to get temperatures in Fahrenheit
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
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
  result.isDay = isDay(data.sys); // Rename day -> isDay
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

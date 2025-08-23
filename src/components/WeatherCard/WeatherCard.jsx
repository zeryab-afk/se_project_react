import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const filteredOptions = weatherOptions.filter(
    (option) =>
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
  );

  let weatherOptionUrl;
  let weatherOptionCondition;
  let weatherOptionDay;

  if (filteredOptions.length === 0) {
    const defaultOption =
      defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
    weatherOptionUrl = defaultOption.url;
    weatherOptionCondition = "";
    weatherOptionDay = weatherData.isDay;
  } else {
    weatherOptionUrl = filteredOptions[0].url;
    weatherOptionCondition = filteredOptions[0].condition;
    weatherOptionDay = filteredOptions[0].day;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg; {currentTemperatureUnit}
      </p>
      {weatherOptionUrl && (
        <img
          src={weatherOptionUrl}
          className="weather-card__image"
          alt={`Card showing ${
            weatherOptionDay ? "day" : "night"
          }time${weatherOptionCondition ? ` ${weatherOptionCondition}` : ""}`}
        />
      )}
    </section>
  );
}

export default WeatherCard;

import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter(
    (option) =>
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
  );

  // declare all variables here so they exist in both cases
  let weatherOptionUrl;
  let weatherOptionCondition;
  let weatherOptionDay;

  if (filteredOptions.length === 0) {
    // Use default image
    const defaultOption =
      defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
    weatherOptionUrl = defaultOption.url;
    weatherOptionCondition = ""; // no specific condition
    weatherOptionDay = weatherData.isDay;
  } else {
    weatherOptionUrl = filteredOptions[0].url;
    weatherOptionCondition = filteredOptions[0].condition;
    weatherOptionDay = filteredOptions[0].day;
  }

  return (
    <section className="Weather-Card">
      <p className="Weather-Card__temp">{weatherData.temp.F} &deg; F</p>
      {weatherOptionUrl && (
        <img
          src={weatherOptionUrl}
          className="Weather-Card__image"
          alt={`Card showing ${
            weatherOptionDay ? "day" : "night"
          }time${weatherOptionCondition ? ` ${weatherOptionCondition}` : ""}`}
        />
      )}
    </section>
  );
}

export default WeatherCard;

import "./WeatherCard.css"
import cloudy from "../../assets/cloudy.png"
function WeatherCard({weatherData}) {
    return <section className="Weather-Card">
        <p className="Weather-Card__temp">{weatherData.temp.F} &deg; F</p>
        <img src={cloudy} alt="cloudy" className="Weather-Card__image" />
    </section>
}

export default WeatherCard;
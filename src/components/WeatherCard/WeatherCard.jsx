import "./WeatherCard.css"
import cloudy from "../../assets/cloudy.png"
function WeatherCard() {
    return <section className="Weather-Card">
        <p className="Weather-Card__temp">75 &deg; F</p>
        <img src={cloudy} alt="cloudy" className="Weather-Card__image" />
    </section>
}

export default WeatherCard;
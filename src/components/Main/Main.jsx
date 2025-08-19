import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
// 🔧 Removed unused import of defaultClothingItems
// import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData, onCardClick, clothingItems }) {  //  Added clothingItems prop
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F} &deg; F / You may want to wear:
        </p>
        <div className="cards__list">
          {/* 🔧 Now rendering from clothingItems prop instead of defaultClothingItems */}
          {clothingItems
            .filter((item) => item.weather === weatherData.type)
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default Main;

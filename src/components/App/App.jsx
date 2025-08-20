import { useEffect, useState } from "react";
import ItemCard from '../ItemCard/ItemCard.jsx';

import "./App.css";
import { coordinates, apiKey, defaultClothingItems } from "../../utils/constants"; // ✅ Added import
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  // ✅ Now using the correct defaultClothingItems from constants
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddClothesModalOpen, setIsAddClothesModalOpen] = useState(false);

  const handleAddClothesClick = () => {
    setIsAddClothesModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsAddClothesModalOpen(false);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <Header
        weatherData={weatherData}
        onAddClothesClick={handleAddClothesClick}
      />

      <Main
        weatherData={weatherData}
        onCardClick={handleCardClick}
        clothingItems={clothingItems}
      />

      <ModalWithForm
        title="New Garment"
        buttonText="Add Garment"
        isOpen={isAddClothesModalOpen}
        onClose={handleCloseModal}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
            required
          />
        </label>

        <label htmlFor="imageUrl" className="modal__label">
          Image URL{" "}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
            required
          />
        </label>

        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              name="weather"
              value="hot"
              className="modal__radio-input"
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__label modal__label_type_radio">
            <input
              id="warm"
              type="radio"
              name="weather"
              value="warm"
              className="modal__radio-input"
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__label modal__label_type_radio">
            <input
              id="cold"
              type="radio"
              name="weather"
              value="cold"
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>

      <Footer />

      {selectedItem && (
        <ItemModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
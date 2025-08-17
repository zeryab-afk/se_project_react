import { useEffect, useState } from "react";
import ItemCard from '../ItemCard/ItemCard.jsx';

import "./App.css";
import { coordinates, APIKEY } from "../../utils/constants";
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

  // State for ItemModal
  const [selectedItem, setSelectedItem] = useState(null);

  // 🔑 New state for Add Clothes Modal
  const [isAddClothesModalOpen, setIsAddClothesModalOpen] = useState(false);

  // Handle opening Add Clothes modal
  const handleAddClothesClick = () => {
    setIsAddClothesModalOpen(true);
  };

  // Handle closing any modal
  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsAddClothesModalOpen(false);
  };

  // Handle clicking on a clothing card
  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  // Fetch weather data
  useEffect(() => {
    getWeather(coordinates, APIKEY)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="page">
      {/* Pass handleAddClothesClick to Header */}
      <Header
        weatherData={weatherData}
        onAddClothesClick={handleAddClothesClick}
      />

      <Main weatherData={weatherData} onCardClick={handleCardClick} />

      {/* Add Clothes Modal */}
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
          />
        </label>

        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="text"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>

        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input id="hot" type="radio" className="modal__radio-input" />
            Hot
          </label>
          <label htmlFor="warm" className="modal__label modal__label_type_radio">
            <input id="warm" type="radio" className="modal__radio-input" />
            Warm
          </label>
          <label htmlFor="cold" className="modal__label modal__label_type_radio">
            <input id="cold" type="radio" className="modal__radio-input" />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>

      <Footer />

      {/* Item Modal */}
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;

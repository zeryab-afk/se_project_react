// src/components/App/App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCard from '../ItemCard/ItemCard.jsx';

import "./App.css";
import { coordinates, apiKey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { getClothingItems, addClothingItem, deleteClothingItem } from "../../utils/Api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddClothesModalOpen, setIsAddClothesModalOpen] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

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

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === 'F' ? 'C' : 'F');
  };

  const handleAddItemSubmit = (item, resetForm) => {
    addClothingItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        resetForm();
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteItem = (item) => {
    deleteClothingItem(item._id)
      .then(() => {
        setClothingItems(clothingItems.filter((i) => i._id !== item._id));
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => console.error(err));

    getClothingItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <BrowserRouter>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <Header
            weatherData={weatherData}
            onAddClothesClick={handleAddClothesClick}
          />

          <Routes>
            <Route 
              path="/" 
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              } 
            />
            <Route 
              path="/profile" 
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  onAddClothesClick={handleAddClothesClick}
                />
              } 
            />
          </Routes>

          <AddItemModal
            isOpen={isAddClothesModalOpen}
            onAddItem={handleAddItemSubmit}
            onCloseModal={handleCloseModal}
          />

          <Footer />

          {selectedItem && (
            <ItemModal 
              item={selectedItem} 
              onClose={handleCloseModal}
              onDelete={handleDeleteItem}
            />
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </BrowserRouter>
  );
}

export default App;
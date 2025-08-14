import { useState } from 'react';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });

  // State for ItemModal
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="page">
      <Header />
      <Main weatherData={weatherData} onCardClick={handleCardClick} />
      <div className="page__content">
        <ModalWithForm title="New Garment" buttonText="Add Garment">
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
              <input id="hot" type="radio" className="modal__radio-input" />Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__label_type_radio">
              <input id="warm" type="radio" className="modal__radio-input" />Warm
            </label>
            <label htmlFor="cold" className="modal__label modal__label_type_radio">
              <input id="cold" type="radio" className="modal__radio-input" />Cold
            </label>
          </fieldset>
        </ModalWithForm>
      </div>
      <Footer /> 

      {/* Item Modal */}
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;

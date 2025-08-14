import { useState } from 'react';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Footer from '../Footer/Footer';

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });

  return (
    <div className="page">
      <Header />
      <Main weatherData={weatherData} />
      <div className="page__content">
        <ModalWithForm title="New Garment" buttonText="Add Garment" >
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
          {/* for hot */}
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input id="hot" type="radio" className="modal__radio-input" />Hot
          </label>
          {/* for warm */}
          <label htmlFor="warm" className="modal__label modal__label_type_radio">
            <input id="warm" type="radio" className="modal__radio-input" />Warm
          </label>
          {/* for cold */}
          <label htmlFor="cold" className="modal__label modal__label_type_radio">
            <input id="cold" type="radio" className="modal__radio-input" />Cold
          </label>
        </fieldset>
        </ModalWithForm>
      
      </div>
      <Footer /> 
    </div>
  );
}

export default App;

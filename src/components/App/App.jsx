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
        <ModalWithForm />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;

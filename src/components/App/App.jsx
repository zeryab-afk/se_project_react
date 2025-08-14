import { useState } from 'react';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const [weatherData, setWeatherData] = useState({ type: "" });

  return (
    <div className="page">
      <Header />
      <Main weatherData={weatherData} />
      <div className="page__content"></div>
    </div>
  );
}

export default App;

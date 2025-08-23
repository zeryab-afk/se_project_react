import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../toggleswitch/toggleswitch";

function Header({ onAddClothesClick, weatherData }) {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    // function to format date + time
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("default", {
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentDateTime(formatted);
    };

    updateDateTime(); 
    const interval = setInterval(updateDateTime, 60000); 

    return () => clearInterval(interval); 
  }, []);
  

  return (
    <header className="header page__container">
      
      <img className="header__logo" src={logo} alt="WTWR logo" />
      
      <p className="header__date-and-location">
        {currentDateTime}, {weatherData.city}  
      </p>

      <button
        className="header__add-clothes-btn"
        onClick={onAddClothesClick}
      >
        + Add clothes
      </button>
<ToggleSwitch/>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
      
    </header>
  );
}

export default Header;
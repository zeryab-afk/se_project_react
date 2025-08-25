import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
function Header({ onAddClothesClick, weatherData }) {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
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
      
      <Link to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </Link>
      
      <p className="header__date-and-location">
        {currentDateTime}, {weatherData.city}  
      </p>

      {/* CHANGED: Moved ToggleSwitch before the Add clothes button */}
      <ToggleSwitch/>
      
      <button
        className="header__add-clothes-btn"
        onClick={onAddClothesClick}
      >
        + Add clothes
      </button>
      
      <Link to="/profile" className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </Link>
      
    </header>
  );
}

export default Header;
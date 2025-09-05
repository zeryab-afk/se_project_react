// src/components/Header/Header.jsx
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ onAddClothesClick, weatherData, onLoginClick, onRegisterClick, isLoggedIn }) { // Removed onLogout prop
  const [currentDateTime, setCurrentDateTime] = useState("");
  const currentUser = useContext(CurrentUserContext);

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

  // Get user avatar or initial
  const getUserAvatar = () => {
    if (currentUser.avatar) {
      return currentUser.avatar;
    }
    return avatar; // default avatar
  };

  // Get user name or initial
  const getUserName = () => {
    if (currentUser.name) {
      return currentUser.name;
    }
    return "Terrence Tegegne"; // default name
  };

  // Get user initial for placeholder
  const getUserInitial = () => {
    if (currentUser.name) {
      return currentUser.name.charAt(0).toUpperCase();
    }
    return "T";
  };

  return (
    <header className="header page__container">
      
      <Link to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </Link>
      
      <p className="header__date-and-location">
        {currentDateTime}, {weatherData.city}  
      </p>

      <ToggleSwitch/>
      
      {isLoggedIn ? (
        <>
          <button
            className="header__add-clothes-btn"
            onClick={onAddClothesClick}
          >
            + Add clothes
          </button>
          
          <div className="header__user-container">
            <Link to="/profile" className="header__user-link">
              <p className="header__username">{getUserName()}</p>
              {currentUser.avatar ? (
                <img src={getUserAvatar()} alt={getUserName()} className="header__avatar" />
              ) : (
                <div className="header__avatar-placeholder">
                  {getUserInitial()}
                </div>
              )}
            </Link>
          </div>
        </>
      ) : (
        <div className="header__auth-buttons">
          <button className="header__auth-btn" onClick={onRegisterClick}>
            Sign up
          </button>
          <button className="header__auth-btn" onClick={onLoginClick}>
            Log in
          </button>
        </div>
      )}
      
    </header>
  );
}

export default Header;
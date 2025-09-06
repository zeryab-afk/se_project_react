// src/components/App/App.jsx
import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { coordinates, apiKey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { getClothingItems, addClothingItem, deleteClothingItem, addCardLike, removeCardLike, updateUserProfile } from "../../utils/Api";
import { register, login, checkToken } from "../../utils/auth";

// Create a wrapper component that uses useNavigate
function AppContent() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddClothesModalOpen, setIsAddClothesModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  // Check for token on app load
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error("Token check failed:", err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  // Handle user registration
  const handleRegister = ({ name, avatar, email, password }) => {
    const makeRequest = () => {
      return register({ name, avatar, email, password }).then(() => {
        handleLogin({ email, password });
      });
    };
    handleSubmit(makeRequest);
  };

  // Handle user login
  const handleLogin = ({ email, password }) => {
    const makeRequest = () => {
      return login({ email, password }).then((res) => {
        localStorage.setItem("jwt", res.token);
        setCurrentUser(res.user || {});
        setIsLoggedIn(true);
      });
    };
    handleSubmit(makeRequest);
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate("/");
  };

  // Handle profile update
  const handleUpdateUser = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    const makeRequest = () => {
      return updateUserProfile({ name, avatar }, token).then(setCurrentUser);
    };
    handleSubmit(makeRequest);
  };

  // Handle card likes
  const handleCardLike = ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    if (!isLiked) {
      addCardLike(_id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === _id ? updatedCard : item))
          );
        })
        .catch((err) => console.error("Like failed:", err));
    } else {
      removeCardLike(_id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === _id ? updatedCard : item))
          );
        })
        .catch((err) => console.error("Dislike failed:", err));
    }
  };

  // Handle add item
  const handleAddItemSubmit = (item, resetForm) => {
    const token = localStorage.getItem("jwt");
    const makeRequest = () => {
      return addClothingItem(item, token).then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        resetForm();
      });
    };
    handleSubmit(makeRequest);
  };

  const handleAddClothesClick = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    setIsAddClothesModalOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsAddClothesModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
    setIsEditProfileModalOpen(false);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === 'F' ? 'C' : 'F');
  };

  const handleDeleteItem = (item) => {
    const token = localStorage.getItem("jwt");
    deleteClothingItem(item._id, token)
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
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <Header
            weatherData={weatherData}
            onAddClothesClick={handleAddClothesClick}
            onLoginClick={() => setIsLoginModalOpen(true)}
            onRegisterClick={() => setIsRegisterModalOpen(true)}
            isLoggedIn={isLoggedIn}
          />

          <Routes>
            <Route 
              path="/" 
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  onCardLike={handleCardLike}
                  isLoggedIn={isLoggedIn}
                />
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    clothingItems={clothingItems.filter(item => item.owner === currentUser._id)}
                    onCardClick={handleCardClick}
                    onAddClothesClick={handleAddClothesClick}
                    onEditProfileClick={handleEditProfileClick}
                    onCardLike={handleCardLike}
                    onLogout={handleLogout}
                    isLoggedIn={isLoggedIn}  /* ← FIXED: Added isLoggedIn prop */
                  />
                </ProtectedRoute>
              } 
            />
          </Routes>

          <AddItemModal
            isOpen={isAddClothesModalOpen}
            onAddItem={handleAddItemSubmit}
            onCloseModal={handleCloseModal}
            isLoading={isLoading}
          />

          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={handleCloseModal}
            onRegister={handleRegister}
            onLoginClick={() => {
              setIsRegisterModalOpen(false);
              setIsLoginModalOpen(true);
            }}
            isLoading={isLoading}
          />

          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={handleCloseModal}
            onLogin={handleLogin}
            onRegisterClick={() => {
              setIsLoginModalOpen(false);
              setIsRegisterModalOpen(true);
            }}
            isLoading={isLoading}
          />

          <EditProfileModal
            isOpen={isEditProfileModalOpen}
            onClose={handleCloseModal}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
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
    </CurrentUserContext.Provider>
  );
}

// Main App component that wraps everything with BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
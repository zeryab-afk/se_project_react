// src/components/SideBar/SideBar.jsx
import './SideBar.css';
import avatar from '../../assets/avatar.png';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SideBar({ onEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);

  // Get user avatar or default
  const getUserAvatar = () => {
    if (currentUser.avatar) {
      return currentUser.avatar;
    }
    return avatar;
  };

  // Get user name or default
  const getUserName = () => {
    if (currentUser.name) {
      return currentUser.name;
    }
    return "Terrence Tegegne";
  };

  // Get user initial for placeholder
  const getUserInitial = () => {
    if (currentUser.name) {
      return currentUser.name.charAt(0).toUpperCase();
    }
    return "T";
  };

  return (
    <div className="sidebar">
      {currentUser.avatar ? (
        <img src={getUserAvatar()} alt={getUserName()} className="sidebar__avatar" />
      ) : (
        <div className="sidebar__avatar-placeholder">
          {getUserInitial()}
        </div>
      )}
      <p className="sidebar__username">{getUserName()}</p>
      <button className="sidebar__edit-button" onClick={onEditProfileClick}>
        Change profile data
      </button>
    </div>
  );
}

export default SideBar;
// src/components/Profile/Profile.jsx
import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ clothingItems, onCardClick, onAddClothesClick, onEditProfileClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <div className="profile__content">
        <SideBar 
          currentUser={currentUser} 
          onEditProfileClick={onEditProfileClick}
        />
        <ClothesSection 
          clothingItems={clothingItems} 
          onCardClick={onCardClick}
          onAddClothesClick={onAddClothesClick}
          onCardLike={onCardLike}
        />
      </div>
    </div>
  );
}

export default Profile;
import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

function Profile({ clothingItems, onCardClick, onAddClothesClick, currentUser }) {
  return (
    <div className="profile">
      <div className="profile__content">
        <SideBar currentUser={currentUser} />
        <ClothesSection 
          clothingItems={clothingItems} 
          onCardClick={onCardClick}
          onAddClothesClick={onAddClothesClick}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
}

export default Profile;
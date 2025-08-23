import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

function Profile({ clothingItems, onCardClick, onAddClothesClick }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection 
        clothingItems={clothingItems} 
        onCardClick={onCardClick}
        onAddClothesClick={onAddClothesClick}
      />
    </div>
  );
}

export default Profile;
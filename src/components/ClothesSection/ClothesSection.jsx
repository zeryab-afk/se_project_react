import './ClothesSection.css';
import ItemCard from '../ItemCard/ItemCard';


function ClothesSection({ clothingItems, onCardClick, onAddClothesClick, onCardLike, isLoggedIn }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your items</h2>
        <button 
          className="clothes-section__add-button"
          onClick={onAddClothesClick}
        >
          + Add new
        </button>
      </div>
      <div className="clothes-section__items">
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    </div>
  );
}

export default ClothesSection;
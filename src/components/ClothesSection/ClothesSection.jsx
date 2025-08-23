import './ClothesSection.css';
import ItemCard from '../ItemCard/ItemCard';

function ClothesSection({ clothingItems, onCardClick, onAddClothesClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
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
          />
        ))}
      </div>
    </div>
  );
}

export default ClothesSection;
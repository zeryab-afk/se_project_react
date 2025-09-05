// src/components/ItemCard/ItemCard.jsx
import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import heartOutline from "../../assets/heart.png"; // outline heart
import heartFilled from "../../assets/heart-liked.png";   // filled black heart

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  
  // Check if the item was liked by the current user
  const isLiked = item.likes.some(id => id === currentUser._id);
  
  const handleLikeClick = () => {
    onCardLike({ _id: item._id, isLiked });
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img 
        className="card__image" 
        src={item.imageUrl} 
        alt={item.name} 
        onClick={() => onCardClick(item)}
      />
      {isLoggedIn && (
        <button
          type="button"
          className="card__like-button"
          onClick={handleLikeClick}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          <img 
            src={isLiked ? heartFilled : heartOutline} 
            alt="heart icon" 
            className="card__heart-icon" 
          />
        </button>
      )}
    </li>
  );
}

export default ItemCard;
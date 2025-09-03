// src/components/ItemCard/ItemCard.jsx
import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  
  // Check if the item was liked by the current user
  const isLiked = item.likes.some(id => id === currentUser._id);
  
  // Like button class based on like status
  const itemLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

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
          className={itemLikeButtonClassName}
          onClick={handleLikeClick}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        />
      )}
    </li>
  );
}

export default ItemCard;
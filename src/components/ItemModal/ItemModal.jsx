// src/components/ItemModal/ItemModal.jsx
import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ item, onClose, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  
  // Checking if the current user is the owner of the current clothing item
  const isOwn = item.owner === currentUser._id;
  
  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = `modal__delete-button ${isOwn ? '' : 'modal__delete-button_hidden'}`;

  return (
    <div className="modal modal__opened">
      <div className="modal__content">
        <button type="button" className="modal__close" onClick={onClose}></button>
        <img className="modal__image" src={item.imageUrl || item.link} alt={item.name} />
        <div className="modal__info">
          <h2 className="modal__name">{item.name}</h2>
          <p className="modal__weather">Weather: {item.weather}</p>
          {isOwn && (
            <button 
              className={itemDeleteButtonClassName}
              onClick={() => onDelete(item)}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
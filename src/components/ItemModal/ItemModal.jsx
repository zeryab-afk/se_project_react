import "./ItemModal.css";

function ItemModal({ item, onClose, onDelete }) {
  return (
    <div className="modal modal__opened">
      <div className="modal__content">
        <button type="button" className="modal__close" onClick={onClose}></button>
        <img className="modal__image" src={item.imageUrl || item.link} alt={item.name} />
        <div className="modal__info">
          <h2 className="modal__name">{item.name}</h2>
          <p className="modal__weather">Weather: {item.weather}</p>
          <button 
            className="modal__delete-button"
            onClick={() => onDelete(item)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
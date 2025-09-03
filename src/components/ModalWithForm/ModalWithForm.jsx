// src/components/ModalWithForm/ModalWithForm.jsx
import "./ModalWithForm.css";

function ModalWithForm({ 
  children, 
  buttonText, 
  title, 
  isOpen, 
  onClose, 
  onSubmit,
  onAltClick,
  altButtonText,
  isFormValid
}) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__overlay" onClick={onClose}></div>
      <form className="modal__form" onSubmit={onSubmit}>
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        ></button>
        {children}
        <div className="modal__button-container">
          <button 
            type="submit" 
            className={`modal__submit ${isFormValid ? 'modal__submit_active' : ''}`}
          >
            {buttonText}
          </button>
          {altButtonText && (
            <span className="modal__alt-text">
              or{" "}
              <span className="modal__alt-button" onClick={onAltClick}>
                {altButtonText}
              </span>
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default ModalWithForm;
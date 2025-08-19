import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, isOpen, onClose }) {
  return (
    // 🔧 Changed "modal__opened" → "modal_opened" (BEM correction)
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__overlay" onClick={onClose}></div>
      <form className="modal__form" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        ></button>
        {children}
        <button type="submit" className="modal__submit">{buttonText}</button>
      </form>
    </div>
  );
}

export default ModalWithForm;

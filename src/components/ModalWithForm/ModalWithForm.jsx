import "./ModalWithForm.css";

function ModalWithForm({children, buttonText, title}) {
  return (
    <div className="modal"> 
      <form className="modal__form">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close"></button>
        {children}
        {/* Submit button */}
        <button type="submit" className="modal__submit">{buttonText}</button>
      </form>
    </div>
  );
}

export default ModalWithForm;

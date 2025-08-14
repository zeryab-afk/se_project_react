import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal"> 
      <form className="modal__form">
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close"></button>

        <label htmlFor="name" className="modal__label">
          Name{" "} 
          <input 
            type="text" 
            className="modal__input" 
            id="name"
            placeholder="Name"
          />
        </label>

        <label htmlFor="imageUrl" className="modal__label">
          Image{" "} 
          <input 
            type="text" 
            className="modal__input" 
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>

        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          {/* for hot */}
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input id="hot" type="radio" className="modal__radio-input" />Hot
          </label>
          {/* for warm */}
          <label htmlFor="warm" className="modal__label modal__label_type_radio">
            <input id="warm" type="radio" className="modal__radio-input" />Warm
          </label>
          {/* for cold */}
          <label htmlFor="cold" className="modal__label modal__label_type_radio">
            <input id="cold" type="radio" className="modal__radio-input" />Cold
          </label>
        </fieldset>

        {/* Submit button */}
        <button type="submit" className="modal__submit">Add garment</button>
      </form>
    </div>
  );
}

export default ModalWithForm;

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function RegisterModal({ isOpen, onClose, onRegister, onLoginClick }) {
  const initialValues = {
    email: "",
    password: "",
    name: "",
    avatar: ""
  };
  
  const { values, handleChange, errors, isValid } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ 
      name: values.name, 
      avatar: values.avatar, 
      email: values.email, 
      password: values.password 
    });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Sign up"
      buttonText="Sign up"
      onAltClick={onLoginClick}
      altButtonText="Log in"
      isFormValid={isValid}
    >
      <div className="modal__input-group">
        <label className="modal__label" htmlFor="register-email">Email*</label>
        <input
          id="register-email"
          className="modal__input"
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.email}</span>
      </div>
      <div className="modal__input-group">
        <label className="modal__label" htmlFor="register-password">Password*</label>
        <input
          id="register-password"
          className="modal__input"
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
          minLength="6"
        />
        <span className="modal__error">{errors.password}</span>
      </div>
      <div className="modal__input-group">
        <label className="modal__label" htmlFor="register-name">Name *</label>
        <input
          id="register-name"
          className="modal__input"
          name="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
          minLength="2"
        />
        <span className="modal__error">{errors.name}</span>
      </div>
      <div className="modal__input-group">
        <label className="modal__label" htmlFor="register-avatar">Avatar URL *</label>
        <input
          id="register-avatar"
          className="modal__input"
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.avatar}</span>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
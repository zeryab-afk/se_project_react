// src/components/RegisterModal/RegisterModal.jsx
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onRegister, onLoginClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const isFormValid = email && password && name && avatar;

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, avatar, email, password });
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
      isFormValid={isFormValid}
    >
      <div className="modal__input-group">
        <label className="modal__label">Email*</label>
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="modal__input-group">
        <label className="modal__label">Password*</label>
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="modal__input-group">
        <label className="modal__label">Name *</label>
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="modal__input-group">
        <label className="modal__label">Avatar URL *</label>
        <input
          className="modal__input"
          type="url"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
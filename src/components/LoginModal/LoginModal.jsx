// src/components/LoginModal/LoginModal.jsx
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Log in"
      buttonText="Log in"
      onAltClick={onRegisterClick}
      altButtonText="Sign up"
      isFormValid={isFormValid}
    >
      <div className="modal__input-group">
        <label className="modal__label">Email</label>
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
        <label className="modal__label">Password</label>
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
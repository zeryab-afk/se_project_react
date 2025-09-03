// src/components/EditProfileModal/EditProfileModal.jsx
import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";

function EditProfileModal({ isOpen, onClose, onUpdateUser, currentUser }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, avatar });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Change profile data"
      buttonText="Save changes"
    >
      <div className="modal__input-group">
        <label className="modal__label">Name</label>
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
        <label className="modal__label">Avatar URL</label>
        <input
          className="modal__input"
          type="url"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </div>
    </ModalWithForm>
  );
}

export default EditProfileModal;
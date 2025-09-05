// src/components/EditProfileModal/EditProfileModal.jsx
import { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onClose, onUpdateUser }) { // Removed currentUser prop
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const currentUser = useContext(CurrentUserContext); // Get from context

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
        <label className="modal__label" htmlFor="edit-name">Name</label>
        <input
          id="edit-name"
          className="modal__input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="modal__input-group">
        <label className="modal__label" htmlFor="edit-avatar">Avatar URL</label>
        <input
          id="edit-avatar"
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
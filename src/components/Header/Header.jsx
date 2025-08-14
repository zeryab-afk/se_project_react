import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ onAddClothesClick }) {
  return (
    <header className="header page__container">
      <img className="header__logo" src={logo} alt="WTWR logo" />
      <p className="header__date-and-location">June 15, New York</p>
      <button
        className="header__add-clothes-btn"
        onClick={onAddClothesClick}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;

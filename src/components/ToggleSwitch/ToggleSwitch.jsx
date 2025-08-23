import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  return (
    <label className="toggle-switch">
     <input type="checkbox" className="toggle-switch__check" />
     <span className="toggle-switch__cirlce"></span>
  <span className="toggle-switch__cirlce toggle-switch__cirlce_F">F</span>
  <span className="toggle-switch__cirlce toggle-switch__cirlce_F">C</span>
    </label>
  );
}

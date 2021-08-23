import React from "react";
import "./Styles/OrangeButton.css";

function OrangeButton({ label }) {
  return (
    <div>
      <button className="orange-button">{label}</button>
    </div>
  );
}

export default OrangeButton;

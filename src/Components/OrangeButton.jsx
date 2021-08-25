import React from "react";
import "./Styles/OrangeButton.css";

function OrangeButton({ label, style }) {
  return (
    <div className="orange-button" style={style}>{label}</div>
  );
}

export default OrangeButton;

import React from "react";
import "./Styles/HomeSideHeader.css";

function HomeSideHeader({ label }) {
  return (
    <div>
      <div className="side-header">
        <p>{label}</p>
      </div>
    </div>
  );
}

export default HomeSideHeader;

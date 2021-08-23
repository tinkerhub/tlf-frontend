import React from "react";
import HomeNavBar from "../../../Components/HomeNavBar";
import Welcome from "../../../Components/Welcome";

import "./ModeratorHome.css";

function ModeratorHome() {
  return (
    <div>
      <div className="momain-container">
        <HomeNavBar />
        <Welcome name="Abhinav K" role="moderator" stack="" />
      </div>
    </div>
  );
}

export default ModeratorHome;

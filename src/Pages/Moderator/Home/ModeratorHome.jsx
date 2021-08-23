import React from "react";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";

import "./ModeratorHome.css";

function ModeratorHome() {
  return (
    <div>
      <div className="momain-container">
        <HomeNavBar />
        <Welcome name="Abhinav K" role="moderator" stack="" />
        <div className="orange-bars">
          <HomeSideHeader label="TLF Mentors" />

          <div className="filter">
            <div className="row1">
              <p>Flutter</p>
              <p>JavaScript</p>
            </div>
            <div className="row2">Python</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModeratorHome;

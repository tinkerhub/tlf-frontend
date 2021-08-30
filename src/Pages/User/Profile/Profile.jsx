import React from "react";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";

function Profile() {
  return (
    <div>
      <div className="profile-container">
        <HomeNavBar />
        <div className="profile-body">
          <div className="profile-sidebar">
            <HomeSideHeader label="Profile" />
            <div className="points-header">
              <p>330 Points</p>
            </div>
          </div>
          <div className="profile-main">
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

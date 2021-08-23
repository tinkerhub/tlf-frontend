import React from "react";
import "./UserHome.css";

function UserHome() {
  return (
    <div>
      <div className="main-container">
        <div className="navbar-home">
          <div className="lefttext">
            <p className="line-one">
              <b>TinkerHub</b>
            </p>
            <p className="line-two">Learning Facilitator</p>
          </div>
          <div className="righttext">
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
